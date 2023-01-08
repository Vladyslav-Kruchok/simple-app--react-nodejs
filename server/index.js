// server/index.js
/**
 * modules
 */
const path = require('path');
//const express = require("express");
const app = require("./app");
const dotenv = require('dotenv');
/**
 * code
 */
const configPath = path.join(__dirname, 'config', '.env');
dotenv.config({ path: configPath });

const { PORT = 5000 } = process.env;

//const app = express();

/*app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});*/

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});