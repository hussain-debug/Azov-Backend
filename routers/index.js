const contactRouter = require("./contact");
const applicationRouter = require("./application");

const Routes = (app) => {
  app.use("/contact", contactRouter);
  app.use("/application", applicationRouter);
};

module.exports = Routes;
