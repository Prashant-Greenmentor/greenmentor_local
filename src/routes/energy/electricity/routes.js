const {
  sitesSelects,
  electricitySourcesSelects,
  unitsSelects,
  currenciesSelects,
  transactionTypesSelects,
  electricityDataAdds,
  electricityDataGet,
  electricityInputDataGet,
  UploadElectricityEvidence,
  electricityDataUpdates
} = require("../../../controller/energy/electricity/app");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const route = ({ router, makeExpressCallback, validateAuth }) => {

  // GET 
  router.get(
    "/energy/electricity/:organization_id/sites",
    validateAuth,
    makeExpressCallback(sitesSelects)
  );
  router.get(
    "/energy/electricity/electricity-sources",
    validateAuth,
    makeExpressCallback(electricitySourcesSelects)
  );
  router.get(
    "/energy/electricity/units",
    validateAuth,
    makeExpressCallback(unitsSelects)
  );
  router.get(
    "/energy/electricity/currencies",
    validateAuth,
    makeExpressCallback(currenciesSelects)
  );
  router.get(
    "/energy/electricity/electricity-data",
    validateAuth,
    makeExpressCallback(electricityDataGet)
  );  // for all electricity data
  router.get(
    "/energy/electricity/electricity-input-data",
    validateAuth,
    makeExpressCallback(electricityInputDataGet)
  );  // for all electricity input data
  router.get(
    "/energy/electricity/:electricity_source_id/transaction-types",
    validateAuth,
    makeExpressCallback(transactionTypesSelects)
  );
  

  // POST
  
  router.post(
    "/energy/electricity/:organization_id/data/",
    validateAuth,
    makeExpressCallback(electricityDataAdds)
  );

  router.post(
    "/energy/electricity/:organization_id/data/evidence",
    validateAuth,
    upload.array("files"),
    makeExpressCallback(UploadElectricityEvidence)
  );
  //PUT
  router.put(
    "/energy/electricity/:organization_id/data/:id",
    validateAuth,
    makeExpressCallback(electricityDataUpdates)
  );

  return router;
};

module.exports = route;
