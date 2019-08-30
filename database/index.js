const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
const db = mongoose.connection;

mongoose.Promise = global.Promise;

const yellReviewSchema = new mongoose.Schema({
  id: Number,
  employed: String,
  title: String,
  employer: String,
  name: String,
  year: Number,
  bootcamp: String,
  area: String,
  date: String,
  linkedin: String
}); 

const yellReviews = mongoose.model('yellreviews', yellReviewSchema);

module.exports = db;
module.exports = yellReviews;