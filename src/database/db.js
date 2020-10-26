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
//var url = "mongodb+srv://andro:846521@cluster0.8qbbw.gcp.mongodb.net/<andro>?retryWrites=true&w=majority"