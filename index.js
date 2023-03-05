const express = require("express");
const app = express();
const config = require("./config");
const db = require("./utils/db");
const routes = require("./routers/index");
const cors = require("cors");
app.use(express.json());
app.use(cors());

// db connection
db.opendb();

// routes
routes(app);

app.listen(config.PORT, () => {
  console.log(
    `App is Running On http://localhost:${config.PORT}\nOn ${app.get(
      "env"
    )} Mode!`
  );
});
