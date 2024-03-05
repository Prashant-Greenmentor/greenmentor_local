const selectFuelType = ({ fuelDao, decrypt }) => {
  return async function select(info) {
    let data = [];
    const res = await fuelDao.selectAllFuelTypes();
    if (res.length > 0) {
      // only when there is data returned
      for (let i = 0; i < res.length; i++) {
        const e = res[i];

        // push items to array
        data.push({
          id: e.id,
          fuel_type: e.fuel_type,
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

module.exports = selectFuelType;
