exports.getIp = (req, res, next) => {
  // Checks if IP address is present in 'X-Forwarded-For' header
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // If the IP address is in an array format (may happen with 'X-Forwarded-For'), get the first IP address
  const userIp = Array.isArray(ip) ? ip[0] : ip;

  // Reply with the user's IP address
  res.status(200).json({ ip: userIp });
};
