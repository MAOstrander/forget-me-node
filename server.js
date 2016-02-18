"use strict";
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000; // eslint-disable-line no-magic-numbers
const Note = mongoose.model('Notes', mongoose.Schema({
  title: String,
  content: String
}));

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
  Note.create(req.body, (err, note) => {
    if (err) throw err;
    console.log(note);
  })
  res.redirect('/');
});

mongoose.connect('mongodb://localhost:27017/forget-me-node', (err) => {
  if (err) throw err;

  app.listen(PORT, () => {
    console.log(`Node.js server started. Listening on port ${PORT}`);
  });
});
