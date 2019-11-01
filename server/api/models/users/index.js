const db = require('../../../data/db-config.js');

function getUsers() {
  return db('users').orderBy('id');
}

function getUserById(id) {
  return db('users')
    .where({ id })
    .first();
}

function addUser(user) {
  db('users')
    .returning('id')
    .insert({ user });
}

function editUser(id, username) {
  db('users')
    .returning('id')
    .where({ id })
    .update({ username })[0];
}

function deleteUser(id) {
  db('users')
    .returning('id')
    .where({ id })
    .delete()[0];
}

module.exports = { getUsers, getUserById, addUser, editUser, deleteUser };
