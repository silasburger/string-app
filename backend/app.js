const express = require('express');
const app = express();
const postRoutes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());
app.use('/posts', postRoutes);

/** 404 handler */

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function (err, req, res) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;