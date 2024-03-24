const express = require('express');
const app = express();
const getIP = require('external-ip')();

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
app.get('/', (req, res, next) => {
  getIP((err, ip) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json({ ip });
  });
});

module.exports = app;
