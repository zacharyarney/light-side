const db = require('../../../data/db-config.js');

function register(user) {
  return db('users')
    .returning('id')
    .insert(user);
}

function login(user) {
  return db('users')
    .where({ username: user.username })
    .first();
}

module.exports = { register, login };
