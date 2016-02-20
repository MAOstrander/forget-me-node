'use strict';

const express = require('express');
const router = express.Router();

const cat = require('../controllers/category');
const Category = require('../models/category');
const Note = require('../models/note');

router.param('id', (req, res, next, id) => {
  Category.findById(id, (err, category) => {
    if (err) throw err;

    req.category = category;

    Note.find({category: id}, (err, notes) => {
      if (err) throw err;

      req.category.notes = notes;
      next();
    })
  });
});

router.get('/cat', cat.index);
router.get('/cat/new', cat.newcat);
router.get('/cat/:id', cat.show);
// router.delete('/cats/:id', cat.destroy);
// router.get('/cats/:id/edit', cat.edit);
// router.put('/cats/:id', cat.update);
router.post('/cat', cat.create);


module.exports = router;
