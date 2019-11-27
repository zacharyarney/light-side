const db = require('../../../data/db-config.js');

function getUsers() {
  return db('users').orderBy('id');
}

function getUserById(id) {
  return db('users')
    .where({ id })
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

function editUser(id, username) {
  return db('users')
    .returning('id')
    .where({ id })
    .update({ username })[0];
}

function deleteUser(id) {
  return db('users')
    .returning('id')
    .where({ id })
    .delete()[0];
}

module.exports = {
  getUsers,
  getUserById,
  getUserWithNotes,
  getUserWithComments,
  addUser,
  editUser,
  deleteUser,
};
