require("dotenv").config();

module.exports = {
  development: {
    dialect: "postgres",
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    logging: true,
    ssl: true,
  },
  staging: {
    dialect: "postgres",
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE_TEST,
    host: process.env.PGHOST,
    logging: true,
    ssl: true,
    dialectOptions: {
      ssl: { require: false, rejectUnauthorized: false },
    },
  },
  test: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE_TEST,
    host: process.env.PGHOST,
    dialect: "postgres",
    logging: false,
  },
  production: {
    dialect: "postgres",
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    logging: false,
    dialectOptions: {
      ssl: true,
    },
  },
};
