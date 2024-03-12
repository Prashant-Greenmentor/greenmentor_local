const {inputFuelDatas} = require("../../../entities/energy/fuel/app");
const fuelDao = require("../../../data-access/energy/fuel/app"); // database queries
const { getQuaterFromDate, deepCopy } = require("../../../functions/app");
// const { encrypt, decrypt } = require("../../../functions/app");
// #########
const selectSite = require("./select-sites");
const selectFuelType = require("./select-fuel-types");
const selectUnit = require("./select-units");
const selectCurrency = require("./select-currencies");
const selectUseType = require("./select-use-types");
const addFuelData = require("./insert-input-fuel-data");
const updateFuelData = require("./update-input-fuel-data");
const getFuelInputData = require("./get-input-fuel-data");
const FuelData = require("./get-fuel-data");  // for all fuel data
const convertFuelData = require("./convert-fuel-data");
// #########
const selectSites = selectSite({ fuelDao });
const selectFuelTypes = selectFuelType({ fuelDao });
const selectUnits = selectUnit({ fuelDao });
const selectCurrencies = selectCurrency({ fuelDao });
const selectUseTypes = selectUseType({ fuelDao });

const selectFuelData = FuelData({ fuelDao });  // for all fuel data

const getFuelInputDatas = getFuelInputData({fuelDao });


const convertFuelDatas = convertFuelData({
  fuelDao,
  getQuaterFromDate,
  deepCopy,
});

const addFuelDatas = addFuelData({ inputFuelDatas, fuelDao, convertFuelDatas });
const updateFuelDatas = updateFuelData({ inputFuelDatas, fuelDao,convertFuelDatas });
// #########
const services = Object.freeze({
  selectSites,
  selectFuelTypes,
  selectUnits,
  selectCurrencies,
  selectUseTypes,
  addFuelDatas,
  getFuelInputDatas,
  selectFuelData,
  convertFuelDatas,
  updateFuelDatas
});

module.exports = services;
module.exports = {
  selectSites,
  selectFuelTypes,
  selectUnits,
  selectCurrencies,
  selectUseTypes,
  addFuelDatas,
  selectFuelData,
  getFuelInputDatas,
  convertFuelDatas,
  updateFuelDatas
};
