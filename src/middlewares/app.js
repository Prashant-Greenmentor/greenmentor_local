const basicAuth = require("express-basic-auth");
require("dotenv").config();
// #############
// const myAuth = require("./basic-auth");
// #############
const validateAuth = basicAuth({
  users: { [`${process.env.name}`]: `${process.env.pass}` }, // Change 'name' and 'pass' to your desired credentials in .env
  challenge: true, // Sends the authentication challenge response
  unauthorizedResponse: "Unauthorized", // Custom response for unauthorized requests
});
// #############
const services = Object.freeze({
  validateAuth,
});

module.exports = services;
module.exports = {
  validateAuth,
};
