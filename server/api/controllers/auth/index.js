const bcrypt = require('bcryptjs');
const authModel = require('../../models/auth');
const messages = require('../../utils/messages.js');
const validation = require('../../utils/validation.js');

const {
  USER: { SAVED, UPDATED, DELETED },
} = messages;

function register(req, res, next) {
  const { username, password } = req.body;
  const user = { username, password };

  const hash = bcrypt.hashSync(user.password, 8); // hashSync() hashes synchronously
  user.password = hash;

  if (!validation([username, password])) {
    throw new Error('USER_CONTENT_REQUIRED');
  } else {
    authModel
      .register(user)
      .then((id) => {
        res.status(200).json({ message: SAVED, id });
      })
      .catch((err) => next(err));
  }
}

function login(req, res, next) {
  const { username, password } = req.body;
  const creds = { username, password };

  authModel
    .login(creds)
    .then((user) => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        res.status(200).json({ message: 'welcome!' });
      } else {
        throw new Error('INVALID_CREDENTIALS');
      }
    })
    .catch((err) => next(err));
}

module.exports = { register, login };
