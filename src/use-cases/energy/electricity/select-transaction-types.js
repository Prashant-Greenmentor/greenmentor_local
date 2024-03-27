const selectTransactionType = ({ electricityDao, decrypt }) => {
  return async function select(info) {
    let data = [];

    const { electricity_source_id } = info; // deconstruct
    const res = await electricityDao.selectAllTransactionTypes({
      electricity_source_id,
    });
    if (res.length > 0) {
      // only when there is data returned
      for (let i = 0; i < res.length; i++) {
        const e = res[i];

        // push items to array
        data.push({
          transaction_type: e.transaction_type,
        });
      }
    }
    return data;
  };
};

module.exports = selectTransactionType;
