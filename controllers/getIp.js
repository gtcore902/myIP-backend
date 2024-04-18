const getIP = require('external-ip')();

// exports.getIp = (req, res, next) => {
//   getIP((err, ip) => {
//     if (err) {
//       res.status(404).json({ err });
//       throw err;
//     }
//     res.status(200).json({ ip });
//   });
// };

exports.getIp = async (req, res, next) => {
  try {
    // Attempts to retrieve external IP address asynchronously
    const ip = await getIP.get();
    res.status(200).json({ ip });
  } catch (err) {
    console.error('Error retrieving external IP address:', err);
    res.status(500).json({ error: 'Unable to retrieve external IP address' });
  }
};
