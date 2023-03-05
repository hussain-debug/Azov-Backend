const express = require("express");
const contactRouter = express.Router();
const contactController = require("../controllers/contact");

contactRouter
  .route("/")
  .get(contactController.getAllContact)
  .post(contactController.createContact);

module.exports = contactRouter;
 