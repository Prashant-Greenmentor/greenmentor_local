const fetchSummaryData = ({ energyDao }) => {
  return async function select(info) {
    let data = [];
    const { organization_id } = info; // deconstruct
    const res = await energyDao.selectAllSummaryData(organization_id);
    if (res && res.length > 0) {
      return res;
    }
    return [];
  };
};

module.exports = fetchSummaryData;
