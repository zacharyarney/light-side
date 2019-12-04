const db = require('../../../data/db-config.js');

function getUsers() {
  return db('users').orderBy('id');
}

function getUserByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}

function getUserWithNotes(id) {
  return db('users')
    .where({ 'users.id': id })
    .join('notes', { 'notes.user_id': 'users.id' });
}

function getUserWithComments(id) {
  return db('users')
    .where({ 'users.id': id })
    .join('comments', { 'comments.user_id': 'users.id' });
}

function addUser(user) {
  return db('users')
    .returning('id')
    .insert(user);
}

function editUser(id, user) {
  return db('users')
    .returning('id')
    .where({ id })
    .update(user);
}

function deleteUser(id) {
  return db('users')
    .returning('id')
    .where({ id })
    .delete();
}

module.exports = {
  getUsers,
  getUserByUsername,
  getUserWithNotes,
  getUserWithComments,
  addUser,
  editUser,
  deleteUser,
};
