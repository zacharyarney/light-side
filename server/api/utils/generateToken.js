require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (user) => {
  // DO NOT STORE SENSITIVE INFO IN TOKEN
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secret, options);
};
