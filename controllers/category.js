'use strict';

const Category = require('../models/category');

module.exports = {
  index (req, res) {
    Category.find({}, (err, categories) => {
      if (err) throw err;

      res.render('cat-index', {categories: categories});
    });
  },

  newcat (req, res) {
    res.render('new-cat');
  },

  create (req, res) {
    Category.create(req.body, (err, cat) => {
      if (err) throw err;

      res.redirect(`/cat`);
      // res.redirect(`/cat/${cat._id}`);
    });
  },

  // edit (req, res) {
  //   res.render('new-cat', {cat: req.cat});
  // },

  // update (req, res) {
  //   req.cat.update(req.body, (err) => {
  //     if (err) throw err;

  //     res.redirect(`/cats/${req.cat._id}`);
  //   });
  // },

  show (req, res) {
      res.render('display-cat', {category: req.category});
  },

  // destroy (req, res) {
  //   req.cat.remove((err) => {
  //     if (err) throw err;

  //     res.redirect('/cats');
  //   });
  // }
};
