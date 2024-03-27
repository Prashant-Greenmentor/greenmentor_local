const {
  selectSummaryData,
} = require("../../use-cases/energy/app");
// #########

const summaryDataSelect = require("./get-summary-data");


// #########
const summaryDataSelects = summaryDataSelect({ selectSummaryData });
// #########
const services = Object.freeze({
  summaryDataSelects,
});

module.exports = services;
module.exports = {
  summaryDataSelects,
};
