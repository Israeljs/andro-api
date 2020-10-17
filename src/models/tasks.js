const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
      title: {
        type: String,
        required: "Informe o título",
      },
      description: {
        type: String,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("Tasks", TaskSchema);
