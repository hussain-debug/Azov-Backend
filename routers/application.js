const express = require("express");
const applicationRouter = express.Router();
const applicationController = require("../controllers/application");

applicationRouter
  .route("/")
  .get(applicationController.getAllApplication)
  .post(applicationController.createApplication);

module.exports = applicationRouter;
