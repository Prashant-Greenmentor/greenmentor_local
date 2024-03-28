const { Sequelize } = require("sequelize");

const query = ({ connects,models }) => {
  return Object.freeze({
    selectAllSites,
    selectAllElectricitySources,
    selectAllUnits,
    selectAllCurrencies,
    selectAllTransactionTypes,
    insertElectricityDataInput,
    selectAllElectricityInputData,
    selectAllElectricityData,
    getCalculationMethod,
    getUnitTypeByUnit,
    getUsageFactorFromUsageMaster,
    getEfFromElectricityEmissionMaster,
    getConveretedUnit,
    addConvertedData,
    getElectricityById,
    getSiteById,
    getUnitById,
    getUnitByName,
    addSummaryData,
    getSourceType,
    updateElectricityDataInput,
    updateConvertedData
  });

  async function selectAllSites({organization_id}) {
    try {
      const pool = await connects();

      const res=await models.site_master.findAll({where:{organization_id:organization_id}})
        return res;
      } catch (e) {
        console.log("Error: ", e);
      }
  }

  async function selectAllElectricitySources() {
    try {

      const res = await models.electricity_source.findAll({
        attributes: [
          "id",
          "electricity_source"
        ],
        where: {
          is_active: true,
        },
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectAllUnits() {
    try {

      const res = await models.unit_master.findAll({
        where: {
          id: Sequelize.literal(
            `EXISTS (SELECT 1 FROM module_unit_masters WHERE module_unit_masters.unit_id = unit_master.id AND module_unit_masters.module = 2 AND module_unit_masters.sub_module = 2 AND module_unit_masters.unit_type != 5)`
          ),
        },
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectAllCurrencies() {
    try {

      const res = await models.unit_master.findAll({
        where: {
          id: Sequelize.literal(
            `EXISTS (SELECT 1 FROM module_unit_masters WHERE module_unit_masters.unit_id = unit_master.id AND module_unit_masters.module = 2 AND module_unit_masters.sub_module = 2 AND module_unit_masters.unit_type = 5)`
          ),
        },
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectAllTransactionTypes({electricity_source_id}) {
    try {

      const res = await models.electricity_source_master.findAll({
        attributes: ["transaction_type"],
        where: {
          electricity_source_id: electricity_source_id,
          is_active: true, 
        },
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function getSourceType( electricity_source_id, transaction_type ) {
    try {
      const res = await models.electricity_source_master.findOne({
        attributes: ["source_type"],
        where: {
          electricity_source_id: electricity_source_id,
          transaction_type: transaction_type,
          is_active: true,
        },
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectAllElectricityInputData() {
    try {

      const res = await models.electricity_input_master.findAll();

      console.log("query",res)
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectAllElectricityData() {
    try {
      const res = await models.electricity_data.findAll({
        include: [
          {
            model: models.site_master,
            attributes: ["site"],
          },
          {
            model: models.electricity_source,
            attributes: ["electricity_source"],
          },
          {
            model: models.unit_master,
            attributes: ["unit"],
          },
          {
            model: models.currency_master,
            attributes: ["currency"],
          },
        ],
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function insertElectricityDataInput({ data }) {
    try {

      console.log("insertElectricityDataInput 2 :"+JSON.stringify(data));
      const res = await models.electricity_input_master.create(data);
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function getCalculationMethod(whereQuery) {
    try {
      return await models.electricity_calculation.findOne({
        where: whereQuery
      });
    } catch(error) {
      console.error("Error fetching the calculation query from db, reason: ",error.message);
      throw new Error(
        "Error fetching the calculation query from db, reason: "+
        error.message
      );
    }
  }
  
  async function getUnitTypeByUnit(whereQuery) {
    try {
      return await models.module_unit_master.findOne({
        where: whereQuery,
      });
    } catch (error) {
      console.error(
        "Error fetching the calculation query from db, reason: ",
        error.message
      );
      throw new Error(
        "Error fetching the calculation query from db, reason: " + error.message
      );
    }
  }

  async function getUsageFactorFromUsageMaster(whereQuery) {
    try {
      return await models.UsageElectricityMaster.findOne({
        where: whereQuery,
      });
    } catch (error) {
      console.error(
        "Error fetching the usage master from db, reason: ",
        error.message
      );
      throw new Error(
        "Error fetching the usage master from db, reason: " + error.message
      );
    }
  }
  async function getEfFromElectricityEmissionMaster(whereQuery) {
    try {
      return await models.electricity_emission_master.findOne({
        where: whereQuery,
      });
    } catch (error) {
      console.error(
        "Error fetching the ef master from db, reason: ",
        error.message
      );
      throw new Error(
        "Error fetching the ef master from db, reason: " + error.message
      );
    }
  }

  async function getConveretedUnit(whereQuery) {
    try {
      return await models.UnitConversionMaster.findOne({
        where: whereQuery,
      });
    } catch (error) {
      console.error(
        "Error fetching the Unit Coversion data from db, reason: ",
        error.message
      );
      throw new Error(
        "Error fetching the Unit Coversion data from db, reason: " +
          error.message
      );
    }
  }

  async function addConvertedData(convertedData) {
    try {

      await models.electricity_data.create(convertedData);

    } catch (error) {
      console.error(
        "Error savinng the Coverted data in db, reason: ",
        error.message
      );
      throw new Error(
        "Error savinng the Coverted data in db, reason: " + error.message
      );
    }
  }

  async function getSiteById(id) {
    try {
      return await models.site_master.findByPk(id, {
        attributes: ["site"]
      });
    } catch (error) {
      console.error("Error getting Site data from db, reason: ", error.message);
      throw new Error(
        "Error getting Site data from db, reason: " + error.message
      );
    }
  }

  async function getElectricityById(id) {
    try {
      return await models.electricity_source.findByPk(id, {
        attributes: ["electricity_source"]
      });
    } catch (error) {
      console.error("Error getting electricity type data from db, reason: ", error.message);
      throw new Error(
        "Error getting electricity type data from db, reason: " + error.message
      );
    }
  }

  async function getUnitById(id) {
    try {
      return await models.unit_master.findByPk(id, {
        attributes: ["unit"]
      });
    } catch (error) {
      console.error(
        "Error getting unit data from db, reason: ",
        error.message
      );
      throw new Error(
        "Error getting unit data from db, reason: " + error.message
      );
    }
  }

  async function getUnitByName(name) {
    try {
      return await models.unit_master.findOne( {
        where: {
          unit: name
        }
      });
    } catch (error) {
      console.error("Error getting unit data from db, reason: ", error.message);
      throw new Error(
        "Error getting unit data from db, reason: " + error.message
      );
    }
  }


  async function addSummaryData(summaryData) {
    try {
      await models.scope1_scope2_summary_data.create(summaryData);
    } catch (error) {
      console.error(
        "Error saving the Summary data in db, reason: ",
        error.message
      );
      throw new Error(
        "Error saving the Summary data in db, reason: " + error.message
      );
    }
  }

};
async function updateConvertedData(convertedData, id) {
   
  try {
      const electricityData = models.electricity_data;
      // Find the record to update by its ID
      const recordToUpdate = await electricityData.findByPk(id);
      
      if (!recordToUpdate) {
          return { success: false, message: 'Record not found' };
      }

      // Update the record with the new data
      const updatedRecord = await recordToUpdate.update(convertedData);

      if (updatedRecord) {
          return { success: true, message: 'Record updated successfully' };
      } else {
          return { success: false, message: 'Failed to update record' };
      }
  } catch (error) {
      console.log("Error: ", error);
      return { success: false, message: 'An error occurred while updating the record' };
  }
}
async function updateElectricityDataInput({ id, data }) {
   
  try {
    const electricityInputData =await  models.electricity_input_master;
    // Find the record to update by its ID
    const recordToUpdate = await electricityInputData.findByPk(id);
    
    if (recordToUpdate) {
      // Update the record with the new data
      await recordToUpdate.update(data);
      return { success: true, message: 'Record updated successfully' };
    } else {
      return { success: false, message: 'Record not found' };
    }
  } catch (e) {
    console.log("Error: ", e);
    return { success: false, message: 'An error occurred while updating the record' };
  }
}
module.exports = query;
