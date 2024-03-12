const { Sequelize } = require("sequelize");

const query = ({ connects,models }) => {
  return Object.freeze({
    selectAllSites,
    selectAllFuelTypes,
    selectAllUnits,
    selectAllCurrencies,
    selectAllUseTypes,
    insertFuelDataInput,
    updateFuelDataInput,// for update insert fuel input data 
    selectAllFuelInputData,
    selectAllFuelData,
    getCalculationMethod,
    getUnitTypeByUnit,
    getUsageFactorFromUsageMaster,
    getEfFromFuelEmissionMaster,
    getConveretedUnit,
    addConvertedData,
    updateConvertedData,
    getFuelById,
    getSiteById,
    getUnitById,
    getUseTypeById
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

  async function selectAllFuelTypes() {
    try {

      const res = await models.FuelType.findAll({
        attributes: [
          "id",
          "fuel_type"
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
            `EXISTS (SELECT 1 FROM module_unit_masters WHERE module_unit_masters.unit_id = unit_master.id AND module_unit_masters.module = 1 AND module_unit_masters.sub_module = 1 AND module_unit_masters.unit_type != 5 AND module_unit_masters.is_active=true)`
          ),
          is_active:true
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
            `EXISTS (SELECT 1 FROM module_unit_masters WHERE module_unit_masters.unit_id = unit_master.id AND module_unit_masters.module = 1 AND module_unit_masters.sub_module = 1 AND module_unit_masters.unit_type = 5)`
          ),
        },
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectAllUseTypes() {
    try {

      const res = await models.use_type_master.findAll();

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  async function selectAllFuelInputData() {
    try {

      const res = await models.fuel_input_master.findAll();

      console.log("query",res)
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  async function selectAllFuelData() {
    try {

      const res = await models.fuel_data.findAll({
        include: [
          {
            model: models.site_master,
            attributes: ["site"],
          },
          {
            model: models.FuelType,
            attributes: ["fuel_type"],
          },
          {
            model: models.use_type_master,
            attributes: ["use_type"],
          },
          {
            model: models.unit_master,
            attributes: ["unit"],
          },
        ],
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function insertFuelDataInput({ data }) {
    try {
      // use sequelize on inserting
      // console.log("insertFuelDataInput"+JSON.parse(data));
      console.log("insertFuelDataInput 2 :"+JSON.stringify(data));
      const fuelInputData = models.fuel_input_master;
      const res = await fuelInputData.create(data);
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  async function updateFuelDataInput({ id, data }) {
   
    try {
      const fuelInputData = models.fuel_input_master;
      // Find the record to update by its ID
      const recordToUpdate = await fuelInputData.findByPk(id);
      
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
  
  async function getCalculationMethod(whereQuery) {
    try {
      return await models.fuel_calculation.findOne({
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
      return await models.UsageMaster.findOne({
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
  async function getEfFromFuelEmissionMaster(whereQuery) {
    try {
      return await models.fuel_emission_master.findOne({
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

      await models.fuel_data.create(convertedData);

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

  // for update fuel data
  async function updateConvertedData(convertedData, id) {
   
    try {
        const fuelData = models.fuel_data;
        // Find the record to update by its ID
        const recordToUpdate = await fuelData.findByPk(id);
        
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

  async function getFuelById(id) {
    try {
      return await models.FuelType.findByPk(id, {
        attributes: ["fuel_type"]
      });
    } catch (error) {
      console.error("Error getting fuel type data from db, reason: ", error.message);
      throw new Error(
        "Error getting fuel type data from db, reason: " + error.message
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

  async function getUseTypeById(id) {
    try {
      return await models.use_type_master.findByPk(id, {
        attributes: ["use_type"],
      });
    } catch (error) {
      console.error("Error getting unit data from db, reason: ", error.message);
      throw new Error(
        "Error getting unit data from db, reason: " + error.message
      );
    }
  }
};

module.exports = query;
