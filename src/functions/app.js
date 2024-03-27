const dotenv = require("dotenv");
dotenv.config();

const crypto = require("crypto");
const algorithm = process.env.ALGORITHM;
const password = process.env.ENCRYPTION_KEY;
const iv = process.env.IV;
// #####################
const encrypts = require("./encrypt");
const decrypts = require("./decrypt");
const validatesDate = require("./validateDate");
const quaterFromDate = require("./quaterFromDate");
const getDaysCountBetweenDates = require("./getDaysCount");
const getAllMonthCombosBetweenDates = require("./getAllMonthsCombos");
const deepCopyObjects = require("./deepCopy");
// #####################
const encrypt = encrypts({ crypto, algorithm, password, iv });
const decrypt = decrypts({ crypto, algorithm, password, iv });
const validateDate = validatesDate();
const getQuaterFromDate = quaterFromDate();
const getDaysCount = getDaysCountBetweenDates();
const getAllMonthYearCombos = getAllMonthCombosBetweenDates({
  getQuaterFromDate,
});
const deepCopy = deepCopyObjects();
// #####################
const services = Object.freeze({
  encrypt,
  decrypt,
  validateDate,
  getQuaterFromDate,
  getDaysCount,
  deepCopy,
  getAllMonthYearCombos,
});

module.exports = services;
module.exports = {
  decrypt,
  encrypt,
  validateDate,
  getQuaterFromDate,
  getDaysCount,
  deepCopy,
  getAllMonthYearCombos,
};
