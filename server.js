const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./models/user');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/create-user', function(req, res, next) {
  var user = new User();
  user.profile.name = req.body.name;
  user.password = req.body.password;
  user.email = req.body.email;

  user.save(function(err) {
    if (err) return next(err);

    res.json('Success! Created new user');
  });
});

app.listen(PORT, function(err) {
  if (err) throw err;
  console.log('Server is Running');
});
