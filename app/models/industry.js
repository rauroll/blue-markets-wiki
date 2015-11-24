var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var Industry = new Schema({
  code: Number,
  level: Number,
  name: String,
  subindustryCodes: [{type: Number, ref: 'Subindustry'}]
});


module.exports = mongoose.model('industries', Industry);