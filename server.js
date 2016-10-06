const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://root:qwerty@ds051863.mlab.com:51863/db_ecommerce', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the databse');
  }
});

app.use(morgan('dev'));


app.get('/', function(req, res) {
  var name = 'eL';
  res.json('my Name is ' + name);
});

app.get('/fruit', function(req, res) {
  res.json('the fruit is a banana');
});

app.listen(PORT, function(err) {
  if (err) throw err;
  console.log('Server is Running');
});
