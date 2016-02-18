"use strict";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000; // eslint-disable-line no-magic-numbers

app.use(bodyParser.urlencoded( {extended: false} ) );
app.use(bodyParser.json() );

app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.send('Server Is Go!');
});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});
app.post('/notes', (req, res) => {
  console.log("Is the form there?", req.body);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});
