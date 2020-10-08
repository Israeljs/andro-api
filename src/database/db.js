const mongoose = require("mongoose");

class DataBase {
    constructor() {
        this.database();
      }
    
    async database() {
    await mongoose.connect('mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }
}

module.exports = new DataBase().database;
