const {
  sitesSelects,
  fuelTypesSelects,
  unitsSelects,
  currenciesSelects,
  useTypesSelects,
  fuelInputDataGet, // for retrive data
  fuelDataAdds,
  fuelDataUpdates, //for update
  fuelDataGet,//for all fuel data
  fuelDataGetPdf,//for download pdf file
  UploadFuelEvidence
} = require("../../../controller/energy/fuel/app");
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })
const route = ({ router, makeExpressCallback, validateAuth }) => {

  // GET
  router.get("/energy/fuel/:organization_id/sites",validateAuth ,makeExpressCallback(sitesSelects));
  router.get("/energy/fuel/fuel-types",validateAuth ,makeExpressCallback(fuelTypesSelects));
  router.get("/energy/fuel/units",validateAuth ,makeExpressCallback(unitsSelects));
  router.get("/energy/fuel/currencies",validateAuth ,makeExpressCallback(currenciesSelects));
  router.get("/energy/fuel/use-types",validateAuth ,makeExpressCallback(useTypesSelects));
  router.get("/energy/fuel/fuel-data",validateAuth ,makeExpressCallback(fuelDataGet));  // for all fuel data
  router.get("/energy/fuel/fuel-data/pdf-download",makeExpressCallback(fuelDataGetPdf));  // for all fuel data pdf
  router.get("/energy/fuel/:organization_id/purchased-fuel",validateAuth ,makeExpressCallback(fuelInputDataGet));
  
  // POST
  
  router.post("/energy/fuel/:organization_id/data/:dataType", validateAuth, makeExpressCallback(fuelDataAdds));
  router.post("/energy/fuel/:organization_id/data/:dataType/evidence",validateAuth, upload.array("files"), makeExpressCallback(UploadFuelEvidence));
  //PUT
  router.put("/energy/fuel/:organization_id/data/:id", validateAuth, makeExpressCallback(fuelDataUpdates));
  return router;
};

module.exports = route;
