const addFuelInputData = ({ inputFuelDatas, fuelDao, convertFuelDatas }) => {
  return async function post(info) {
    let data = await inputFuelDatas(info); // entity

    data = {
      fuel_input_data: data.getFuelInputData(),
      evidence: data.getEvidence(),
      is_active: data.getIsActive(),
      created_at: data.getCreatedAt(),
      modified_at: data.getModifiedAt(),
      modified_by: data.getModifiedBy(),
      organization_id: data.getOrganizationId(),
      fuel_record_type: data.getFuelRecordType(),
    };

    //   insert
    const res = await fuelDao.insertFuelDataInput({ data });

    // ##
    let msg = `Error on inserting fuel data, please try again.`;
    // console.log(msg);
    if (res) {
    
      msg = `Fuel has been added successfully.`;
      let fuelRecord = info

      const convertedData = await convertFuelDatas(fuelRecord);
        

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

      await fuelDao.addConvertedData(convertedData);
      await fuelDao.addSummaryData(summaryData);
      // insert into approval master
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = addFuelInputData;
