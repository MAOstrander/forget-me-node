'use strict';

const express = require('express');
const router = express.Router();

const note = require('../controllers/note');
const Note = require('../models/note');

router.param('id', (req, res, next, id) => {
  Note
    .findById(id)
    .populate('category')
    .exec( (err, note) => {
    if (err) throw err;

    req.note = note;
    next();
  });
});

router.get('/notes', note.index);
router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.delete('/notes/:id', note.destroy);
router.get('/notes/:id/edit', note.edit);
router.put('/notes/:id', note.update);
router.post('/notes', note.create);


module.exports = router;
