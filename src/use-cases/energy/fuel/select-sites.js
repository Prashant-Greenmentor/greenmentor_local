const selectSite = ({ fuelDao, decrypt }) => {
  return async function select(info) {
    let data = [];
    const { organization_id } = info; // deconstruct
    const res = await fuelDao.selectAllSites({organization_id});
    if (res.rowCount > 0) {
      // only when there is data returned
      const items = res.rows;
      for (let i = 0; i < items.length; i++) {
        const e = items[i];

        // push items to array
        data.push({
          id: e.id,
          site: e.site ,
          organization_id: e.organization_id ,
          is_active: e.is_active ,
          created_at: e.created_at,
          modified_at: e.modified_at,
          modified_by: e.modified_by,
        });
      }
    }
    return res;
  };
};

module.exports = selectSite;
