const express = require('express');

const app = express();

// Define Global Middleware

// Define Global API ROUTE
require('./routes')(app);

module.exports = app;