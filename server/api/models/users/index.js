const db = require('../../../data/db-config.js');

function getUsers() {
  return db('users').orderBy('id');
}

function getUserById(id) {
  return db('users')
    .where({id})
    .first();
}

function getUserWithNotes(id) {
  return db('users')
    .where({id})
    .first()
    .join('notes', {'notes.user_id': 'user.id'});
}

function getUserWithComments(id) {
  return db('users')
    .where({id})
    .first()
    .join('comments', {'comments.user_id': 'user.id'});
}

function addUser(user) {
  db('users')
    .returning('id')
    .insert({user});
}

function editUser(id, username) {
  db('users')
    .returning('id')
    .where({id})
    .update({username})[0];
}

function deleteUser(id) {
  db('users')
    .returning('id')
    .where({id})
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
