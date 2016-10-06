const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

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
