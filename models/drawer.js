const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drawerSchema = new Schema({
  rootId: { type: String },
  drawerId: { type: String },
  name: { type: String, trim: true, required: true },
  type: { type: String, trim: true, required: true },
  subDrawer: { type: Boolean, required: true },
  root: { type: Boolean },
  level: { type: Number, required: true },

  userId: { type: String, required: true }, //Forein key
});

module.exports = mongoose.model("drawer", drawerSchema);
