const { summaryDataSelects } = require("../../controller/energy/app");

const route = ({ router, makeExpressCallback, validateAuth }) => {

  // GET
  router.get(
    "/energy/:organization_id/summary-data",
    validateAuth,
    makeExpressCallback(summaryDataSelects)
  );

  return router;
};

module.exports = route;
