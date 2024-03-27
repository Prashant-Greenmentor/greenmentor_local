const addElectricityInputData = ({
  inputElectricityDatas,
  electricityDao,
  convertElectricityDatas,
  getDaysCount,
  getAllMonthYearCombos,
  deepCopy
}) => {
  return async function post(info) {
    let data = await inputElectricityDatas(info); // entity

    data = {
      electricity_input_data: data.getElectricityInputData(),
      evidence: data.getEvidence(),
      is_active: data.getIsActive(),
      created_at: data.getCreatedAt(),
      modified_at: data.getModifiedAt(),
      modified_by: data.getModifiedBy(),
      organization_id: data.getOrganizationId(),
    };

    //   insert
    const res = await electricityDao.insertElectricityDataInput({ data });

    // ##
    let msg = `Error on inserting electricity data, please try again.`;
    // console.log(msg);
    if (res) {
      console.log(res);
      msg = `Electricity has been added successfully.`;

      let totalBilledDays = getDaysCount(
        new Date(info.bill_start),
        new Date(info.bill_end)
      );
      let avgUnitUsedPerDay, avgAmountPaidPerDay;
      if (info.unit_used) {
        avgUnitUsedPerDay = parseFloat(info.unit_used) / totalBilledDays;
      }
      avgAmountPaidPerDay = parseFloat(info.amount_paid) / totalBilledDays;
      let monthYearCombos = getAllMonthYearCombos(
        new Date(info.bill_start),
        new Date(info.bill_end)
      );

      for (let i = 0; i < monthYearCombos.length; i++) {
        // electricityRecord.unit_used =
        let combo = monthYearCombos[i];
        console.log(combo);
        let electricityRecord = deepCopy(info);
        if(info.unit_used && avgUnitUsedPerDay) {
          electricityRecord.unit_used = combo.daysCovered * avgUnitUsedPerDay;
        }
        electricityRecord.amount_paid = combo.daysCovered * avgAmountPaidPerDay;
        const convertedData = await convertElectricityDatas(
          electricityRecord,
          combo
        );
        console.log(convertedData);

        const summaryData = {
          organization_id: convertedData.organization_id,
          module_id: convertedData.module_id,
          sub_module_id: convertedData.sub_module_id,
          month: convertedData.month,
          quarter: convertedData.quarter,
          year: convertedData.year,
          site_id: convertedData.site_id,
          usage_in_kwh: convertedData.usage_in_kwh,
          total_co2e_kg: convertedData.total_co2e_kg,
          co2e_co2_kg: convertedData.co2e_co2_kg,
          co2e_ch4_kg: convertedData.co2e_ch4_kg,
          co2e_n2o_kg: convertedData.co2e_n2o_kg,
          modified_by: convertedData.modified_by,
        };

        await electricityDao.addConvertedData(convertedData);

        await electricityDao.addSummaryData(summaryData);
      }
      // insert into approval master
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = addElectricityInputData;
