const express = require("express");
const logger = require("morgan");
const { rootRouter } = require("./routes/api");
const app = express();


const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

/**
 * main routs
 */
app.use("/api", rootRouter);

/*app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});*/

module.exports = app;
