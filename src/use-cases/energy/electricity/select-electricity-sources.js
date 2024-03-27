const selectElectricitySource = ({ electricityDao, decrypt }) => {
  return async function select(info) {
    let data = [];
    const res = await electricityDao.selectAllElectricitySources();
    if (res.length > 0) {
      // only when there is data returned
      for (let i = 0; i < res.length; i++) {
        const e = res[i];

        // push items to array
        data.push({
          id: e.id,
          electricity_source: e.electricity_source,
          is_active: e.is_active,
          created_at: e.createdAt,
          modified_at: e.updatedAt,
          modified_by: e.modified_by,
        });
      }
    }
    return data;
  };
};

module.exports = selectElectricitySource;
