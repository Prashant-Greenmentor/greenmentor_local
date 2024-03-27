const {
  selectSites,
  selectElectricitySources,
  selectUnits,
  selectCurrencies,
  selectTransactionTypes,
  addElectricityDatas,
  selectElectricityDatas,
  getElectricityInputDatas,
  updateElectricityDatas
} = require("../../../use-cases/energy/electricity/app");
// #########

const sitesSelect = require("./select-sites");
const electricitySourcesSelect = require("./select-electricity-sources");
const unitSelect = require("./select-units");
const currencySelect = require("./select-currencies");
const transactionTypeSelect = require("./select-transaction-types");
const electricityDataAdd = require("./insert-electricity-datas");
const electricityData=require("./get-electricity-datas")// for all data converted
const electricityInputData=require("./get-electricity-input-datas")// for all input data raw
const UploadEvidence = require("./upload-evidence");
const electricityDataUpdate = require("./update-electricity-datas"); //for update

// #########
const sitesSelects = sitesSelect({selectSites});
const electricitySourcesSelects = electricitySourcesSelect({
  selectElectricitySources,
});
const unitsSelects = unitSelect({selectUnits });
const currenciesSelects = currencySelect({selectCurrencies });
const transactionTypesSelects = transactionTypeSelect({
  selectTransactionTypes,
});

const electricityDataAdds = electricityDataAdd({ addElectricityDatas });
const UploadElectricityEvidence = UploadEvidence();
const electricityDataGet = electricityData({ selectElectricityDatas });  //for all converted data
const electricityInputDataGet = electricityInputData({ getElectricityInputDatas }); //for all input data
const electricityDataUpdates = electricityDataUpdate({updateElectricityDatas });// for update

// #########
const services = Object.freeze({
  sitesSelects,
  electricitySourcesSelects,
  unitsSelects,
  currenciesSelects,
  transactionTypesSelects,
  electricityDataAdds,
  UploadElectricityEvidence,
  electricityDataGet,
  electricityInputDataGet,
  electricityDataUpdates,
});

module.exports = services;
module.exports = {
  sitesSelects,
  electricitySourcesSelects,
  unitsSelects,
  currenciesSelects,
  transactionTypesSelects,
  electricityDataAdds,
  electricityDataGet,
  electricityInputDataGet,
  UploadElectricityEvidence,
  electricityDataUpdates,
};
