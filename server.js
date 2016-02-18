"use strict";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000; // eslint-disable-line no-magic-numbers

app.use(bodyParser.urlencoded( {extended: false} ) );
app.use(bodyParser.json() );

app.get('/', (req, res) => {
  res.send('Server Is Go!');
});

app.listen(PORT, () => {
  console.log(`Node.js server started. Listening on port ${PORT}`);
});
