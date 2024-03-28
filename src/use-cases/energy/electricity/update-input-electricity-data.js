const updateElectricityInputData = ({ electricityDao, inputElectricityDatas, convertElectricityDatas }) => {
  return async function put(info) {
    try {
      let data = await inputElectricityDatas(info); // entity
      
      const { id, ...dataForUpdate } = data?.getElectricityInputData();

      const updatedData = {
        fuel_electricity_data: dataForUpdate,
        evidence: data.getEvidence(),
        is_active: data.getIsActive(),
        created_at: data.getCreatedAt(),
        modified_at: data.getModifiedAt(),
        modified_by: data.getModifiedBy(),
        organization_id: data.getOrganizationId(),
        // fuel_record_type: data.getFuelRecordType(),
      };

      const res = await electricityDao.updateElectricityDataInput({ data: updatedData, id });
      
      if (res?.success) {
        const electricityRecord = info;
        // const convertedData = await convertElectricityDatas(electricityRecord); // Convert electricity data
/// for aproval
        // const updateConvertedDataRes = await electricityDao.updateConvertedData(convertedData, id);
        // console.log(updateConvertedDataRes)
        // if (updateConvertedDataRes.success) {
          return "electricity  data have been updated successfully.";
        // } else {
          // throw new Error(updateConvertedDataRes.message||"Error in updating converted data.");
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

module.exports = updateElectricityInputData;
