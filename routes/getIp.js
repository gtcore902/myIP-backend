const express = require('express');
const router = express.Router();
const getIpCtrl = require('../controllers/getIp');

router.get('/', getIpCtrl.getIp);

module.exports = router;
