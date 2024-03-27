const {
  selectSites,
  selectFuelTypes,
  selectUnits,
  selectCurrencies,
  selectUseTypes,
  addFuelDatas,
  updateFuelDatas,
  getFuelInputDatas,
  selectFuelData,

 
} = require("../../../use-cases/energy/fuel/app");
// #########

const sitesSelect = require("./select-sites");
const fuelTypesSelect = require("./select-fuel-types");
const unitSelect = require("./select-units");
const currencySelect = require("./select-currencies");
const useTypeSelect = require("./select-use-types");
const FuelDataUpdate = require("./update-fuel-datas"); //for update
const FuelDataAdd = require("./insert-fuel-datas");
const fuelData=require("./get-fuel-datas")// for all data
const fuelDataPdf=require("./PdfConvert_entities/get-fuelPdf-datas")// for pdf data
const fuelInputData=require("./get-fuel-input-datas")
const UploadEvidence = require("./upload-evidence");

// #########
const sitesSelects = sitesSelect({selectSites});
const fuelTypesSelects = fuelTypesSelect({selectFuelTypes });
const unitsSelects = unitSelect({selectUnits });
const currenciesSelects = currencySelect({selectCurrencies });
const useTypesSelects = useTypeSelect({selectUseTypes });
const fuelDataAdds = FuelDataAdd({addFuelDatas });
const fuelDataUpdates = FuelDataUpdate({updateFuelDatas });// for update
const UploadFuelEvidence = UploadEvidence();
const fuelInputDataGet=fuelInputData({getFuelInputDatas})
const fuelDataGet=fuelData({selectFuelData})  //for all data
const fuelDataGetPdf=fuelDataPdf({selectFuelData})  //for all data

// #########
const services = Object.freeze({
  sitesSelects,
  fuelTypesSelects,
  unitsSelects,
  currenciesSelects,
  useTypesSelects,
  fuelDataAdds,
  UploadFuelEvidence,
  fuelDataGet,
  fuelInputDataGet,
  fuelDataUpdates,
 
  fuelDataGetPdf
});

module.exports = services;
module.exports = {
  sitesSelects,
  fuelTypesSelects,
  unitsSelects,
  currenciesSelects,
  useTypesSelects,
  fuelDataAdds,
  fuelDataGet,
  UploadFuelEvidence,
  fuelInputDataGet,
  fuelDataUpdates,
  
  fuelDataGetPdf
};
