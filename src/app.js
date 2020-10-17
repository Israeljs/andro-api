const express = require("express");
const requireDir = require("require-dir");

requireDir("./models");

const routes = require("./api/modules/routes");
const { database } = require("./database/db");

class AppController {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    //this.database();
    this.db = database;
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use("/api", routes);
  }
}

module.exports = new AppController().app;

// async database() {
//   await mongoose.connect("mongodb://localhost/tasksdb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   });
// }
