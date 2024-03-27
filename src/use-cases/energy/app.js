const energyDao = require("../../data-access/energy/app"); // database queries
// #########
const fetchSummaryData = require("./select-summary-data");

const selectSummaryData = fetchSummaryData({ energyDao });
// #########
const services = Object.freeze({
  selectSummaryData,
});

module.exports = services;
module.exports = {
  selectSummaryData,
};
