const express = require("express");
const rootRouter = express.Router();
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers");

rootRouter.get("/", ctrlWrapper(ctrl.root.getRoot));

module.exports = rootRouter;