var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var Request = new Schema({
  industryCode: Number,
  fulfilled: Boolean,
  timestamp: { type: Date, default: Date.now },
  message: String,
  creator: String,
  type: String
});


module.exports = mongoose.model('requests', Request);
