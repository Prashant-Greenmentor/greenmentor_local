const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// accessible to any
app.use(cors());

// Body Parser middleware to handle raw JSON files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});

// routes
app.use("/api/v1", require("./routes/energy/fuel/app"));
app.use("/api/v1", require("./routes/energy/electricity/app"));
app.use("/api/v1", require("./routes/energy/app"));


// when invalid routes are entered
app.use(async (req, res) => {
  res.status(404).send(`Route is no where to be found.`);
});

module.exports = server;
