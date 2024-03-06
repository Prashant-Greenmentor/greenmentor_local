const convertFuelData = ({ fuelDao, getQuaterFromDate, deepCopy }) => {
  return async function convert(fuelRecord) {
    try {
      let fuelInputs = deepCopy(fuelRecord);

      let emissionMaster;
      let moduleUnit;
      let conversionMaster;
      let usageConversionMaster;
      let usageMaster;
      let usage_in_kwh;

      if (fuelRecord.quantity && fuelRecord.unit) {
        const whereQueryForUnit = {
          unit_id: fuelRecord.unit,
          module: 1,
          sub_module: 1,
          is_active: true,
        };
        moduleUnit = await fuelDao.getUnitTypeByUnit(whereQueryForUnit);

        if (moduleUnit && moduleUnit.unit_type) {
          fuelInputs["unit_type"] = moduleUnit.unit_type;
        } else {
          throw new Error(
            "Cannot find unit type for provided unit in module unit master"
          );
        }

        const whereQueryForUsageMaster = {
          fuel_type_id: fuelRecord.fuel_type,
          required_unit_type: moduleUnit.unit_type,
          is_active: true,
        };

        usageMaster = await fuelDao.getUsageFactorFromUsageMaster(
          whereQueryForUsageMaster
        );

        if (usageMaster && usageMaster.required_unit) {
          if (
            parseInt(usageMaster.required_unit) !== parseInt(fuelRecord.unit)
          ) {
            const whereQueryForUnitConversion = {
              reported_unit_type: fuelInputs["unit_type"],
              required_unit_type: fuelInputs["unit_type"],
              reported_unit: fuelRecord.unit,
              required_unit: usageMaster.required_unit,
              is_active: true,
            };
            usageConversionMaster = await fuelDao.getConveretedUnit(
              whereQueryForUnitConversion
            );
            if (
              usageConversionMaster &&
              usageConversionMaster.conversion_factor
            ) {
              fuelInputs["quantity"] =
                parseFloat(fuelRecord.quantity) *
                parseFloat(usageConversionMaster.conversion_factor);
            } else {
              throw new Error(
                "Cannot find record for provided parameters in unit conversion master."
              );
            }
          }
          usage_in_kwh =
            parseFloat(fuelInputs["quantity"]) *
            parseFloat(usageMaster.usage_factor_kwh);
        } else {
          throw new Error(
            "Cannot find record for provided parameters in UsageMaster table."
          );
        }

        const whereQueryForEmissionMaster = {
          fuel_type_id: fuelRecord.fuel_type,
          source_type: "DEFRA",
          unit_type_id: fuelInputs["unit_type"],
          is_active: true,
        };
        emissionMaster = await fuelDao.getEfFromFuelEmissionMaster(
          whereQueryForEmissionMaster
        );

        fuelInputs["quantity"] = parseFloat(fuelRecord.quantity);
        if (emissionMaster && emissionMaster.unit_id) {
          if (parseInt(emissionMaster.unit_id) !== parseInt(fuelRecord.unit)) {
            const whereQueryForUnitConversion = {
              reported_unit_type: fuelInputs["unit_type"],
              required_unit_type: fuelInputs["unit_type"],
              reported_unit: fuelRecord.unit,
              required_unit: emissionMaster.unit_id,
              is_active: true,
            };
            conversionMaster = await fuelDao.getConveretedUnit(
              whereQueryForUnitConversion
            );
            if (conversionMaster && conversionMaster.conversion_factor) {
              fuelInputs["quantity"] =
                parseFloat(fuelRecord.quantity) *
                parseFloat(conversionMaster.conversion_factor);
            } else {
              throw new Error(
                "Cannot find record for provided parameters in unit conversion master."
              );
            }
          }
        } else {
          throw new Error(
            "Cannot find record for provided parameters in fuel emission master."
          );
        }
      } else if (fuelRecord.amount_paid && fuelRecord.currency) {
        const whereQueryForUnit = {
          unit_id: fuelRecord.currency,
          module: 1,
          sub_module: 1,
          is_active: true,
        };
        moduleUnit = await fuelDao.getUnitTypeByUnit(whereQueryForUnit);

        if (moduleUnit && moduleUnit.unit_type) {
          fuelInputs["unit_type"] = moduleUnit.unit_type;
        } else {
          throw new Error(
            "Cannot find unit type for provided unit in module unit master"
          );
        }

        const whereQueryForUsageMaster = {
          fuel_type_id: fuelRecord.fuel_type,
          required_unit_type: moduleUnit.unit_type,
          is_active: true,
        };

        usageMaster = await fuelDao.getUsageFactorFromUsageMaster(
          whereQueryForUsageMaster
        );

        if (usageMaster && usageMaster.required_unit) {
          if (
            parseInt(usageMaster.required_unit) !==
            parseInt(fuelRecord.currency)
          ) {
            const whereQueryForUnitConversion = {
              reported_unit_type: fuelInputs["unit_type"],
              required_unit_type: fuelInputs["unit_type"],
              reported_unit: fuelRecord.currency,
              required_unit: usageMaster.required_unit,
              is_active: true,
            };
            usageConversionMaster = await fuelDao.getConveretedUnit(
              whereQueryForUnitConversion
            );
            if (
              usageConversionMaster &&
              usageConversionMaster.conversion_factor
            ) {
              fuelInputs["amount_paid"] =
                parseFloat(fuelRecord.amount_paid) *
                parseFloat(usageConversionMaster.conversion_factor);
            } else {
              throw new Error(
                "Cannot find record for provided parameters in unit conversion master."
              );
            }
          }
          usage_in_kwh =
            parseFloat(fuelInputs["amount_paid"]) *
            parseFloat(usageMaster.usage_factor_kwh);
        } else {
          throw new Error(
            "Cannot find record for provided parameters in UsageMaster table."
          );
        }

        const whereQueryForEmissionMaster = {
          fuel_type_id: fuelRecord.fuel_type,
          source_type: "DEFRA",
          unit_type_id: fuelInputs["unit_type"],
          is_active: true,
        };
        emissionMaster = await fuelDao.getEfFromFuelEmissionMaster(
          whereQueryForEmissionMaster
        );

        fuelInputs["amount_paid"] = parseFloat(fuelRecord.amount_paid);
        if (emissionMaster && emissionMaster.unit_id) {
          if (
            parseInt(emissionMaster.unit_id) !== parseInt(fuelRecord.currency)
          ) {
            const whereQueryForUnitConversion = {
              reported_unit_type: fuelInputs["unit_type"],
              required_unit_type: fuelInputs["unit_type"],
              reported_unit: fuelRecord.currency,
              required_unit: emissionMaster.unit_id,
              is_active: true,
            };
            conversionMaster = await fuelDao.getConveretedUnit(
              whereQueryForUnitConversion
            );
            if (conversionMaster && conversionMaster.conversion_factor) {
              fuelInputs["amount_paid"] =
                parseFloat(fuelRecord.amount_paid) *
                parseFloat(conversionMaster.conversion_factor);
            } else {
              throw new Error(
                "Cannot find record for provided parameters in unit conversion master."
              );
            }
          }
        } else {
          throw new Error(
            "Cannot find record for provided parameters in fuel emission master."
          );
        }
      }

      const whereQueryForCalculation = {};

      if (fuelRecord.quantity && fuelRecord.carbon_content_of_fuel) {
        whereQueryForCalculation["quantity"] = !!fuelRecord.quantity;
        whereQueryForCalculation["carbon_content_of_fuel"] =
          !!fuelRecord.carbon_content_of_fuel;
      } else {
        whereQueryForCalculation["quantity"] = !!fuelRecord.quantity;
        whereQueryForCalculation["ef_of_fuel"] = !!fuelRecord.ef_of_fuel;
        whereQueryForCalculation["heat_content_of_fuel"] =
          !!fuelRecord.heat_content_of_fuel;
        whereQueryForCalculation["carbon_content_of_fuel"] =
          !!fuelRecord.carbon_content_of_fuel;
      }
      whereQueryForCalculation["is_active"] = true;

      const calculationMethod = await fuelDao.getCalculationMethod(
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
      const executeEquation = (equation, fuelRecord) => {
        // Join the equation array into a string
        const equationString = equation.join(" ");

        // Replace variable names with their values
        const replacedEquation = equationString.replace(
          /quantity|carbon_content_of_fuel|heat_content_of_fuel|ef_of_fuel|amount_paid|calculate_ef/g,
          (match) => fuelInputs[match] || match
        );

        // Evaluate the expression
        return eval(replacedEquation);
      };

      let total_kg_co2e_per_unit;
      let kg_co2e_co2_per_unit;
      let kg_co2e_ch4_per_unit;
      let kg_co2e_n20_per_unit;

      if (equation.includes("calculate_ef")) {
        // Execute the equation
        fuelInputs["calculate_ef"] = emissionMaster.total_kg_co2e_per_unit;
        total_kg_co2e_per_unit = executeEquation(equation, fuelInputs);
        fuelInputs["calculate_ef"] = fuelRecord.carbon_content_of_fuel
          ? parseFloat(fuelRecord.carbon_content_of_fuel) * parseFloat(44 / 12)
          : fuelRecord.ef_of_fuel
          ? parseFloat(fuelRecord.ef_of_fuel)
          : emissionMaster.kg_co2e_co2_per_unit;
        kg_co2e_co2_per_unit = executeEquation(equation, fuelInputs);
        fuelInputs["calculate_ef"] = emissionMaster.kg_co2e_ch4_per_unit;
        kg_co2e_ch4_per_unit = fuelInputs.quantity
          ? fuelInputs.quantity * emissionMaster.kg_co2e_ch4_per_unit
          : fuelInputs.amount_paid * emissionMaster.kg_co2e_ch4_per_unit;
        fuelInputs["calculate_ef"] = emissionMaster.kg_co2e_n20_per_unit;
        kg_co2e_n20_per_unit =
          fuelInputs.quantity ? fuelInputs.quantity * emissionMaster.kg_co2e_n20_per_unit : fuelInputs.amount_paid * emissionMaster.kg_co2e_n20_per_unit;
        total_kg_co2e_per_unit =
          parseFloat(kg_co2e_co2_per_unit) +
          parseFloat(kg_co2e_ch4_per_unit) +
          parseFloat(kg_co2e_n20_per_unit);
        fuelInputs["quater"] = getQuaterFromDate(fuelInputs.bill_date);
        fuelInputs["year"] = new Date(fuelInputs.bill_date).getFullYear();
      } else {
        total_kg_co2e_per_unit = executeEquation(equation, fuelInputs);
      }

      let convertedData = {
        organization_id: 1,
        module_id: 1,
        sub_module_id: 1,
        bill_date: fuelInputs.bill_date,
        quarter: fuelInputs["quater"],
        year: fuelInputs["year"],
        site_id: fuelInputs["site"],
        fuel_type_id: fuelInputs["fuel_type"],
        source_type: fuelInputs.source_type,
        use_type_id: fuelInputs.use_type,
        consumed_fuel: fuelInputs.quantity ? fuelInputs.quantity : null,
        fuel_unit_id: fuelInputs.unit ? fuelInputs.unit : null,
        amount_paid: fuelInputs.amount_paid,
        currency_id: fuelInputs.currency,
        heat_content: fuelInputs.heat_content_of_fuel ? fuelInputs.heat_content_of_fuel : null,
        carbon_content_value: fuelInputs.carbon_content_of_fuel ? fuelInputs.carbon_content_of_fuel : null,
        evidence: fuelInputs.evidence,
        status: null,
        comments: null,
        calculation_method: calculationMethod.id,
        input_unit_type: fuelInputs["unit_type"] ? fuelInputs["unit_type"] : null,
        required_unit_type: fuelInputs["unit_type"] ? fuelInputs["unit_type"] : null,
        required_unit: emissionMaster.unit_id,
        unit_conversion: conversionMaster ? conversionMaster.id : null,
        emission_factor: fuelInputs.ef_of_fuel ? fuelInputs.ef_of_fuel : null,
        total_co2e_kg: total_kg_co2e_per_unit,
        co2e_co2_kg: kg_co2e_co2_per_unit,
        co2e_ch4_kg: kg_co2e_ch4_per_unit,
        co2e_n2o_kg: kg_co2e_n20_per_unit,
        usage_required_unit: usageMaster.required_unit,
        usage_factor: usageMaster.usage_factor_kwh,
        usage_unit_type: usageMaster.required_unit_type,
        usage_in_kwh: usage_in_kwh,
        modified_by: 1,
      };

      return convertedData;
    } catch (error) {
      console.log("Exception occured while converting data: ", error.message);
      throw new Error(error.message);
    }
  };
};

module.exports = convertFuelData;