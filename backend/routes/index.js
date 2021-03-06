const express = require('express');
const router = new express.Router();
const StringModel = require('../models');

/**
 * GET / => {posts: [{}]}
 */
router.get('/', async function(req, res, next) {
  try {
    const posts = await StringModel.getAll();
    return res.json({posts});
  } catch (err) {
    return next(err);
  }
});

/**
 * Post / => {posted: {}}
 */
router.post('/', async function(req, res, next) {
  try {
    const posted = await StringModel.create(req.body);
    return res.json({posted});
  } catch (err) {
    return next(err);
  }
});

module.exports = router;