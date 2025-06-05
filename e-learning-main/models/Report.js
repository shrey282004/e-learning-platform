const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  serviceType: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", ReportSchema);

