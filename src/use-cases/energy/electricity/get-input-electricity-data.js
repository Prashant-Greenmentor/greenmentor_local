const selectElectricityInput = ({ electricityDao }) => {
  return async function select(info) {
    const { organization_id } = info; // deconstruct use when required
    const res = await electricityDao.selectAllElectricityInputData();
    // console.log('input data',res)
    const transformData = async (data) => {
      let transformedRows = [];
      for await(item of data) {
        let inputData = {
          id: item.id,
          ...item.electricity_input_data,
          status: "Accepted",
          comments: "OK",
        };

        if (inputData.site) {
          let site = await electricityDao.getSiteById(parseInt(inputData.site));
          inputData.site = site.site;
        }
        if (inputData.unit) {
          let unit = await electricityDao.getUnitById(parseInt(inputData.unit));
          inputData.unit = unit.unit;
        }
        if (inputData.currency) {
          let unit = await electricityDao.getUnitById(parseInt(inputData.currency));
          inputData.currency = unit.unit;
        }
        if (inputData.electricity_source) {
          let electricity = await electricityDao.getElectricityById(
            parseInt(inputData.electricity_source)
          );
          inputData.electricity_source = electricity.electricity_source;
        }

        transformedRows.push(inputData);

      };
      return transformedRows;
    };
    if (res && res.length > 0) {
      const data = await transformData(res);
      return data;
    }
    return [];
  };
};

module.exports = selectElectricityInput;
