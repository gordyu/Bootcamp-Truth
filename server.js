const express = require('express');
const yellReviews = require('./database/index.js');
const app = express();
const port = process.env.PORT || 1000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(__dirname + '/client/dist'));

app.listen(port, function() {
  console.log(`ReviewsComponent is listening on port ${port}`);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/2018-hr-seattle', (req, res) => {
  yellReviews.find({}, function (err, result) {
    if (err) {
      console.log('ERROR', err);
      callback(err, null);
    }
    else {
      res.status(200).send(result);
    }
  });
});