const mongoose = require("mongoose");

class DataBase {
    constructor() {
        this.database();
      }
    
    async database() {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }
}

module.exports = new DataBase().database;
