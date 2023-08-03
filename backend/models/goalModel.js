const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      require: [true, "Please Add Text Value"],
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
