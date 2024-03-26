const express = require('express');
const app = express();
const getIpRoutes = require('./routes/getIp');

// CORS Middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

// Route to retrieve external IP from https://www.npmjs.com/package/external-ip package
app.use('/', getIpRoutes);

module.exports = app;
