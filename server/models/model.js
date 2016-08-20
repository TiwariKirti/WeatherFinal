var mongoose = require('mongoose');

var weatherSchema = mongoose.Schema;

var dbSchema= new weatherSchema({
    "temp": String,
    "pressure": String,
    "humidity": String,
    "temp_min": String,
    "temp_max": String}
  );

module.exports = mongoose.model("wSchema", dbSchema);
