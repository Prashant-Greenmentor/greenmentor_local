const { validateDate } = require("../../../functions/app");
// ########
const makeFuelInput = require("./make-fuel-input");
// ########

const inputFuelDatas = makeFuelInput({validateDate});
// ########
const services = Object.freeze({ inputFuelDatas });

module.exports = services;
module.exports = { inputFuelDatas };
