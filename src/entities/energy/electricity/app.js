const { validateDate } = require("../../../functions/app");
// ########
const makeElectricityInput = require("./make-electricity-input");
// ########

const inputElectricityDatas = makeElectricityInput({ validateDate });
// ########
const services = Object.freeze({ inputElectricityDatas });

module.exports = services;
module.exports = { inputElectricityDatas };
