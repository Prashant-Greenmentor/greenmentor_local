const { connects } = require("../../app");
const models = require("../../sequelize/models");
// ######
const query = require("./query");

// ######
const fuelDao = query({ connects, models });

// ######

module.exports = fuelDao;
