const {
  sitesSelects,
  fuelTypesSelects,
  unitsSelects,
  currenciesSelects,
  useTypesSelects,
  fuelInputDataGet, // for retrive data
  fuelDataAdds,
  fuelDataGet,//for all fuel data
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
  router.get("/energy/fuel/:organization_id/purchased-fuel",validateAuth ,makeExpressCallback(fuelInputDataGet));
  
  // POST
  
  router.post("/energy/fuel/:organization_id/data/:dataType", validateAuth, makeExpressCallback(fuelDataAdds));
  router.post("/energy/fuel/:organization_id/data/:dataType/evidence",validateAuth, upload.array("files"), makeExpressCallback(UploadFuelEvidence));
  // router.post("/energy/fuel/:organization_id/data/:id", validateAuth, makeExpressCallback());
//PUT
  return router;
};

module.exports = route;
