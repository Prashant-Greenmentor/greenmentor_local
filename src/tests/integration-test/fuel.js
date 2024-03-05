const axios = require("axios");
require("dotenv").config();
const url = `${process.env.BASE_URL}:${process.env.PORT}`;

const routes = {
  sitesSelects: async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/api/v1/energy/fuel/1/sites`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  fuelTypesSelects: async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/api/v1/energy/fuel/fuel-types`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  unitsSelects: async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/api/v1/energy/fuel/units`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  currenciesSelects: async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/api/v1/energy/fuel/currencies`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  useTypesSelects: async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/api/v1/energy/fuel/use-types`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  fuelDataAdds: async ({ info }) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${url}/api/v1/energy/fuel/1/data/1`,
        auth: {
          username: process.env.name,
          password: process.env.pass,
        },
        data: {
          ...info,
        },
      });
      return res;
    } catch (e) {
      return e;
    }
  },
  
};

module.exports = routes;
