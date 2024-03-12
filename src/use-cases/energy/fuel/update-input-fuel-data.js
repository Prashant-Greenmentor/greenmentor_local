const updateFuelInputData = ({ fuelDao, inputFuelDatas, convertFuelDatas }) => {
  return async function put(info) {
    try {
      let data = await inputFuelDatas(info); // entity
      
      const { id, ...dataForUpdate } = data?.getFuelInputData();

      const updatedData = {
        fuel_input_data: dataForUpdate,
        evidence: data.getEvidence(),
        is_active: data.getIsActive(),
        created_at: data.getCreatedAt(),
        modified_at: data.getModifiedAt(),
        modified_by: data.getModifiedBy(),
        organization_id: data.getOrganizationId(),
        fuel_record_type: data.getFuelRecordType(),
      };

      const res = await fuelDao.updateFuelDataInput({ data: updatedData, id });
      
      if (res?.success) {
        const fuelRecord = info;
        const convertedData = await convertFuelDatas(fuelRecord); // Convert fuel data
/// for aproval
        // const updateConvertedDataRes = await fuelDao.updateConvertedData(convertedData, id);
        // console.log(updateConvertedDataRes)
        // if (updateConvertedDataRes.success) {
          return "Fuel  data have been updated successfully.";
        // } else {
          throw new Error(updateConvertedDataRes.message||"Error in updating converted data.");
        // }
      } else {
        throw new Error(res.message||"Error in updating fuel data.");
      }
    } catch (error) {
      console.error("Error in updating fuel input data:", error);
      throw error;
    }
  };
};

module.exports = updateFuelInputData;
