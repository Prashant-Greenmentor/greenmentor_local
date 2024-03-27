const convertElectricityData = ({ electricityDao, getQuaterFromDate, deepCopy }) => {
  return async function convert(electricityRecord, combo) {
    try {
      let electricityInputs = deepCopy(electricityRecord);

      let emissionMaster;
      let moduleUnit;
      let conversionMaster;
      let usageConversionMaster;
      let usageMaster;
      let usage_in_kwh;
      let usage_factor;

      let electricity_source_master = await electricityDao.getSourceType(
        electricityRecord.electricity_source, electricityRecord.transaction_type
      );

      if (electricityRecord.unit_used && electricityRecord.unit) {
        const whereQueryForUnit = {
          unit_id: electricityRecord.unit,
          module: 2,
          sub_module: 2,
          is_active: true,
        };
        moduleUnit = await electricityDao.getUnitTypeByUnit(whereQueryForUnit);
        kwhUnit = await electricityDao.getUnitByName("kWh");

        if (moduleUnit && moduleUnit.unit_type) {
          electricityInputs["unit_type"] = moduleUnit.unit_type;
        } else {
          throw new Error(
            "Cannot find unit type for provided unit in module unit master"
          );
        }
        
        if (
          parseInt(kwhUnit.id) !== parseInt(electricityRecord.unit)
        ) {
          const whereQueryForUnitConversion = {
            reported_unit_type: electricityInputs["unit_type"],
            required_unit_type: electricityInputs["unit_type"],
            reported_unit: electricityRecord.unit,
            required_unit: kwhUnit.id,
            is_active: true,
          };
          usageConversionMaster = await electricityDao.getConveretedUnit(
            whereQueryForUnitConversion
          );
          if (
            usageConversionMaster &&
            usageConversionMaster.conversion_factor
          ) {
            electricityInputs["unit_used"] =
              parseFloat(electricityRecord.unit_used) *
              parseFloat(usageConversionMaster.conversion_factor);
          } else {
            throw new Error(
              "Cannot find record for provided parameters in unit conversion master."
            );
          }
          usage_factor = parseFloat(usageConversionMaster.conversion_factor);
            
            
        } else {
          usage_factor = 1;
        }

        usage_in_kwh = parseFloat(electricityInputs["unit_used"]) * usage_factor;
        

        const whereQueryForEmissionMaster = {
          electricity_source_id: electricityRecord.electricity_source,
          unit_type_id: electricityInputs["unit_type"],
          is_active: true,
        };
        emissionMaster = await electricityDao.getEfFromElectricityEmissionMaster(
          whereQueryForEmissionMaster
        );

        electricityInputs["unit_used"] = parseFloat(electricityRecord.unit_used);
        if (emissionMaster && emissionMaster.unit_id) {
          if (parseInt(emissionMaster.unit_id) !== parseInt(electricityRecord.unit)) {
            const whereQueryForUnitConversion = {
              reported_unit_type: electricityInputs["unit_type"],
              required_unit_type: electricityInputs["unit_type"],
              reported_unit: electricityRecord.unit,
              required_unit: emissionMaster.unit_id,
              is_active: true,
            };
            conversionMaster = await electricityDao.getConveretedUnit(
              whereQueryForUnitConversion
            );
            if (conversionMaster && conversionMaster.conversion_factor) {
              electricityInputs["unit_used"] =
                parseFloat(electricityRecord.unit_used) *
                parseFloat(conversionMaster.conversion_factor);
            } else {
              throw new Error(
                "Cannot find record for provided parameters in unit conversion master."
              );
            }
          }
        } else {
          throw new Error(
            "Cannot find record for provided parameters in electricity emission master."
          );
        }
      } else if (electricityRecord.amount_paid && electricityRecord.currency) {
        const whereQueryForUnit = {
          unit_id: electricityRecord.currency,
          module: 1,
          sub_module: 1,
          is_active: true,
        };
        moduleUnit = await electricityDao.getUnitTypeByUnit(whereQueryForUnit);

        if (moduleUnit && moduleUnit.unit_type) {
          electricityInputs["unit_type"] = moduleUnit.unit_type;
        } else {
          throw new Error(
            "Cannot find unit type for provided unit in module unit master"
          );
        }

        const whereQueryForUsageMaster = {
          electricity_source_id: electricityRecord.electricity_source,
          required_unit_type: moduleUnit.unit_type,
          is_active: true,
        };

        usageMaster = await electricityDao.getUsageFactorFromUsageMaster(
          whereQueryForUsageMaster
        );

        if (usageMaster && usageMaster.required_unit) {
          if (
            parseInt(usageMaster.required_unit) !==
            parseInt(electricityRecord.currency)
          ) {
            const whereQueryForUnitConversion = {
              reported_unit_type: electricityInputs["unit_type"],
              required_unit_type: electricityInputs["unit_type"],
              reported_unit: electricityRecord.currency,
              required_unit: usageMaster.required_unit,
              is_active: true,
            };
            usageConversionMaster = await electricityDao.getConveretedUnit(
              whereQueryForUnitConversion
            );
            if (
              usageConversionMaster &&
              usageConversionMaster.conversion_factor
            ) {
              electricityInputs["amount_paid"] =
                parseFloat(electricityRecord.amount_paid) *
                parseFloat(usageConversionMaster.conversion_factor);
            } else {
              throw new Error(
                "Cannot find record for provided parameters in unit conversion master."
              );
            }
          }
          usage_factor = usageMaster.usage_factor_kwh;
          usage_in_kwh =
            parseFloat(electricityInputs["amount_paid"]) *
            usage_factor;
        } else {
          throw new Error(
            "Cannot find record for provided parameters in UsageMaster table."
          );
        }

        const whereQueryForEmissionMaster = {
          electricity_source_id: electricityRecord.electricity_source,
          unit_type_id: electricityInputs["unit_type"],
          is_active: true,
        };
        emissionMaster = await electricityDao.getEfFromElectricityEmissionMaster(
          whereQueryForEmissionMaster
        );

        electricityInputs["amount_paid"] = parseFloat(electricityRecord.amount_paid);
        if (emissionMaster && emissionMaster.unit_id) {
          if (
            parseInt(emissionMaster.unit_id) !== parseInt(electricityRecord.currency)
          ) {
            const whereQueryForUnitConversion = {
              reported_unit_type: electricityInputs["unit_type"],
              required_unit_type: electricityInputs["unit_type"],
              reported_unit: electricityRecord.currency,
              required_unit: emissionMaster.unit_id,
              is_active: true,
            };
            conversionMaster = await electricityDao.getConveretedUnit(
              whereQueryForUnitConversion
            );
            if (conversionMaster && conversionMaster.conversion_factor) {
              electricityInputs["amount_paid"] =
                parseFloat(electricityRecord.amount_paid) *
                parseFloat(conversionMaster.conversion_factor);
            } else {
              throw new Error(
                "Cannot find record for provided parameters in unit conversion master."
              );
            }
          }
        } else {
          throw new Error(
            "Cannot find record for provided parameters in electricity emission master."
          );
        }
      }

      const whereQueryForCalculation = {};


      whereQueryForCalculation["unit_used"] = !!electricityRecord.unit_used;
      whereQueryForCalculation["emission_factor"] = !!electricityRecord.emission_factor;
      whereQueryForCalculation["is_active"] = true;

      const calculationMethod = await electricityDao.getCalculationMethod(
        whereQueryForCalculation
      );

      if (!calculationMethod || !calculationMethod.calculation_equation) {
        console.warn("No calculation equation found for data conversion");
        throw new Error("No calculation equation found for data conversion");
      }

      console.log(
        `Calculating emission factor using calculation method: ${calculationMethod.calculation_method}`
      );

      const calculationEntity = calculationMethod.calculation_equation;

      const equation = calculationEntity.formula;

      if (!equation || equation.length === 0) {
        console.warn(
          "No calculation formulae found in equation for data conversion"
        );
        throw new Error(
          "No calculation formulae found in equation for data conversion"
        );
      }

      // Function to execute the equation
      const executeEquation = (equation, electricityRecord) => {
        // Join the equation array into a string
        const equationString = equation.join(" ");

        // Replace variable names with their values
        const replacedEquation = equationString.replace(
          /unit_used|emission_factor|amount_paid|calculate_ef/g,
          (match) => electricityInputs[match] || match
        );

        // Evaluate the expression
        return eval(replacedEquation);
      };

      let total_kg_co2e_per_unit;
      let kg_co2e_co2_per_unit;
      let kg_co2e_ch4_per_unit;
      let kg_co2e_n2o_per_unit;

      if (equation.includes("calculate_ef")) {
        // Execute the equation
        electricityInputs["calculate_ef"] = emissionMaster.total_kg_co2e_per_unit;
        total_kg_co2e_per_unit = executeEquation(equation, electricityInputs);
        electricityInputs["calculate_ef"] = electricityRecord.emission_factor
          ? parseFloat(electricityRecord.emission_factor)
          : emissionMaster.kg_co2e_co2_per_unit;
        kg_co2e_co2_per_unit = executeEquation(equation, electricityInputs);
        electricityInputs["calculate_ef"] = emissionMaster.kg_co2e_ch4_per_unit;
        kg_co2e_ch4_per_unit = electricityInputs.unit_used
          ? electricityInputs.unit_used * emissionMaster.kg_co2e_ch4_per_unit
          : electricityInputs.amount_paid * emissionMaster.kg_co2e_ch4_per_unit;
        electricityInputs["calculate_ef"] = emissionMaster.kg_co2e_n2o_per_unit;
        kg_co2e_n2o_per_unit =
          electricityInputs.unit_used ? electricityInputs.unit_used * emissionMaster.kg_co2e_n2o_per_unit : electricityInputs.amount_paid * emissionMaster.kg_co2e_n2o_per_unit;
        total_kg_co2e_per_unit =
          parseFloat(kg_co2e_co2_per_unit) +
          (isNaN(kg_co2e_ch4_per_unit) ? 0 : parseFloat(kg_co2e_ch4_per_unit)) +
          (isNaN(kg_co2e_n2o_per_unit) ? 0 : parseFloat(kg_co2e_n2o_per_unit));
      } else {
        total_kg_co2e_per_unit = executeEquation(equation, electricityInputs);
      }
      electricityInputs["quater"] = combo.quarter;
      electricityInputs["year"] = combo.quarter === 4 ? (combo.year - 1): combo.year; // always consider fiscal year april-march
      electricityInputs["month"] = combo.month;

      let convertedData = {
        organization_id: 1,
        module_id: 1,
        sub_module_id: 1,
        bill_date: electricityInputs.bill_date,
        month: electricityInputs["month"],
        quarter: electricityInputs["quater"],
        year: electricityInputs["year"],
        site_id: electricityInputs["site"],
        electricity_source_id: electricityInputs["electricity_source"],
        source_type: electricity_source_master ? electricity_source_master.source_type : "",
        transaction_type: electricityInputs.transaction_type,
        consumed_value: electricityInputs.unit_used
          ? electricityInputs.unit_used
          : null,
        unit_id: electricityInputs.unit ? electricityInputs.unit : null,
        amount_paid: electricityInputs.amount_paid,
        currency_id: electricityInputs.currency,
        evidence: electricityInputs.evidence,
        status: null,
        comments: null,
        calculation_method: calculationMethod.id,
        input_unit_type: electricityInputs["unit_type"]
          ? electricityInputs["unit_type"]
          : null,
        required_unit_type: electricityInputs["unit_type"]
          ? electricityInputs["unit_type"]
          : null,
        required_unit: emissionMaster.unit_id,
        unit_conversion: conversionMaster ? conversionMaster.id : null,
        emission_factor: electricityInputs.emission_factor
          ? electricityInputs.emission_factor
          : null,
        total_co2e_kg: total_kg_co2e_per_unit,
        co2e_co2_kg: kg_co2e_co2_per_unit,
        co2e_ch4_kg: kg_co2e_ch4_per_unit,
        co2e_n2o_kg: kg_co2e_n2o_per_unit,
        usage_required_unit: kwhUnit.id,
        usage_factor: usage_factor ? usage_factor : null,
        usage_unit_type: moduleUnit.unit_type,
        usage_in_kwh: usage_in_kwh ? usage_in_kwh : null,
        modified_by: 1,
      };

      return convertedData;
    } catch (error) {
      console.log("Exception occured while converting data: ", error.message);
      throw new Error(error.message);
    }
  };
};

module.exports = convertElectricityData;