const getIP = require('external-ip')();

exports.getIp = (req, res, next) => {
  getIP((err, ip) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json({ ip });
  });
};
