const {inputElectricityDatas} = require("../../../entities/energy/electricity/app");
const electricityDao = require("../../../data-access/energy/electricity/app"); // database queries
const {
  getQuaterFromDate,
  deepCopy,
  getDaysCount,
  getAllMonthYearCombos
} = require("../../../functions/app");
// const { encrypt, decrypt } = require("../../../functions/app");
// #########
const selectSite = require("./select-sites");
const selectElectricitySource = require("./select-electricity-sources");
const selectUnit = require("./select-units");
const selectCurrency = require("./select-currencies");
const selectTransactionType = require("./select-transaction-types");
const addElectricityData = require("./insert-input-electricity-data");
const getElectricityInputData = require("./get-input-electricity-data");
const updateElectricityData = require("./update-input-electricity-data");
const selectElectricityData = require("./get-electricity-data");  // for all electricity data
const convertElectricityData = require("./convert-electricity-data");
// #########
const selectSites = selectSite({ electricityDao });
const selectElectricitySources = selectElectricitySource({ electricityDao });
const selectUnits = selectUnit({ electricityDao });
const selectCurrencies = selectCurrency({ electricityDao });
const selectTransactionTypes = selectTransactionType({ electricityDao });

const selectElectricityDatas = selectElectricityData({ electricityDao });  // for all electricity data

const getElectricityInputDatas = getElectricityInputData({electricityDao });


const convertElectricityDatas = convertElectricityData({
  electricityDao,
  deepCopy,
});

const addElectricityDatas = addElectricityData({
  inputElectricityDatas,
  electricityDao,
  convertElectricityDatas,
  getDaysCount,
  getAllMonthYearCombos,
  deepCopy,
});
const updateElectricityDatas = updateElectricityData({ inputElectricityDatas, electricityDao,convertElectricityDatas });
// #########
const services = Object.freeze({
  selectSites,
  selectElectricitySources,
  selectUnits,
  selectCurrencies,
  selectTransactionTypes,
  addElectricityDatas,
  getElectricityInputDatas,
  selectElectricityDatas,
  convertElectricityDatas,
  updateElectricityDatas
});

module.exports = services;
module.exports = {
  selectSites,
  selectElectricitySources,
  selectUnits,
  selectCurrencies,
  selectTransactionTypes,
  addElectricityDatas,
  selectElectricityDatas,
  getElectricityInputDatas,
  convertElectricityDatas,
  updateElectricityDatas
};
