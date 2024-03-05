const selectFuelData = ({ fuelDao }) => {
  return async function select(info) {
  
    const { organization_id } = info; // deconstruct use when required
    const res = await fuelDao.selectAllFuelData();
    
    const transformData = (data) => {
     
      return data?.map(item => ({
          ...item?.dataValues,
          site: item.site ? item.site.site : null, 
          use_type: item.use_type ? item.use_type.use_type : null,
          fuel_type: item. fuel_type ? item. fuel_type. fuel_type : null 
      }));
  };

 
    if (res&&res.length > 0) {
      
      return transformData(res);
    }
    return []
  };
};

module.exports = selectFuelData;