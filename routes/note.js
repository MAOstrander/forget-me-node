const express = require('express');
const router = express.Router();

const Note = require('../models/note');

router.get('/notes/new', (req, res) => {
  res.render('new-note');
});

router.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if (err) throw err;

    res.render('display-note', {note: note});
  })
});

router.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;

    console.log(note);
    res.redirect(`/notes/${note._id}`);
  })
});


module.exports = router;
