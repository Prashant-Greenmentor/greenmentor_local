const { Sequelize } = require("sequelize");

const query = ({ connects, models }) => {
  return Object.freeze({
    selectAllSummaryData,
  });

  async function selectAllSummaryData(organization_id) {
    try {
      const res = await models.scope1_scope2_summary_data.findAll({
        include: [
          {
            model: models.site_master,
            attributes: ["site"],
          },
          {
            model: models.organization,
            attributes: ["name"],
          },
          {
            model: models.SubModuleMaster,
            attributes: ["sub_module"],
          },
          {
            model: models.ModuleMaster,
            attributes: ["module"],
          },
        ],
        where: {
          id: organization_id,
        },
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  
};
module.exports = query;
