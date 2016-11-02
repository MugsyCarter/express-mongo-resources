const express = require('express');
const trees = require('./trees');
const app = express();

// routes go here
app.use('/api/trees', trees);


module.exports = app;