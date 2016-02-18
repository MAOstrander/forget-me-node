"use strict";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const routes = require('./routes/note');

const PORT = process.env.PORT || 3000; // eslint-disable-line no-magic-numbers

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded( {extended: false} ) );
app.use(bodyParser.json() );
app.use(methodOverride('_method'));

app.use(routes);

app.get('/', (req, res) => {
  res.send('Server Is Go!');
});

mongoose.connect('mongodb://localhost:27017/forget-me-node', (err) => {
  if (err) throw err;

  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});
