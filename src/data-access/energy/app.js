const { connects } = require("../app");
const models = require("../sequelize/models");
// ######
const query = require("./query");

// ######
const energyDao = query({ connects, models });

// ######

module.exports = energyDao;
