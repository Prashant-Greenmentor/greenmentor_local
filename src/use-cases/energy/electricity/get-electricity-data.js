const selectElectricityData = ({ electricityDao }) => {
  return async function select(info) {
    const { organization_id } = info; // deconstruct use when required
    const res = await electricityDao.selectAllElectricityData();

    //   const transformData = (data) => {
    //     return data?.map(item => ({
    //         bill_date: item?.electricity_input_data?.bill_date,
    //         site: item?.electricity_input_data?.site,
    //         electricity_type: item?.electricity_input_data?.electricity_type,
    //         source_type: item?.electricity_input_data?.source_type,
    //         use_type: item?.electricity_input_data?.use_type,
    //         heat_content_of_electricity: item?.electricity_input_data?.heat_content_of_electricity,
    //         carbon_content_of_electricity: item?.electricity_input_data?.carbon_content_of_electricity,
    //         consumed_electricity: item?.electricity_input_data?.consumed_electricity,
    //         electricity_unit: item?.electricity_input_data?.unit,
    //         evidence: item?.electricity_input_data?.evidence,
    //         status: "Accepted",
    //         comments: "OK",
    //     }));
    // };
    if (res && res.length > 0) {
      return res;
    }
    return [];
  };
};
  
  module.exports = selectElectricityData;
