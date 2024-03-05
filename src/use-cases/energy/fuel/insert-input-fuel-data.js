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
      console.log(res);
      msg = `Fuel has been added successfully.`;
      let fuelRecord = info

      const convertedData = await convertFuelDatas(fuelRecord);
        console.log(convertedData);

      await fuelDao.addConvertedData(convertedData);
      // insert into approval master
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = addFuelInputData;
