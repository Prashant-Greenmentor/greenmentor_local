const selectFuelInput = ({ fuelDao }) => {
  return async function select(info) {
    const { organization_id } = info; // deconstruct use when required
    const res = await fuelDao.selectAllFuelInputData();
    // console.log('input data',res)
    const transformData = async (data) => {
      let transformedRows = [];
      for await(item of data) {
        let inputData = {
          id: item.id,
          ...item.fuel_input_data,
          status: "Accepted",
          comments: "OK",
        };

        if (inputData.site) {
          let site = await fuelDao.getSiteById(parseInt(inputData.site));
          inputData.site = site.site;
        }
        if (inputData.unit) {
          let unit = await fuelDao.getUnitById(parseInt(inputData.unit));
          inputData.unit = unit.unit;
        }
        if (inputData.currency) {
          let unit = await fuelDao.getUnitById(parseInt(inputData.currency));
          inputData.currency = unit.unit;
        }
        if (inputData.fuel_type) {
          let fuel = await fuelDao.getFuelById(parseInt(inputData.fuel_type));
          inputData.fuel_type = fuel.fuel_type;
        }
        if (inputData.use_type) {
          let use_type = await fuelDao.getUseTypeById(
            parseInt(inputData.use_type)
          );
          inputData.use_type = use_type.use_type;
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

module.exports = selectFuelInput;
