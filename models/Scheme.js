const { Schema, model } = require("mongoose");

const TaskScheme = Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Task", TaskScheme);