require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.auth;  
  
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Invalid token.' });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No token provided.' });
  }

}