'use strict';
const express = require('express');
const router = express.Router();

const cat = require('./categories');
const note = require('./note');

router.use(cat);
router.use(note);

module.exports = router;
