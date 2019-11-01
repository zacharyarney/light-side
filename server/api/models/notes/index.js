const db = require('../../../data/db-config.js');

function getNotes() {
  return db('notes').orderBy('id');
}

function getNoteById(id) {
  return db('notes')
    .where({ id })
    .first();
}

function addNote(note) {
  db('notes')
    .returning('id')
    .insert({ note });
}

function editNote(id, title, body) {
  db('notes')
    .returning('id')
    .where({ id })
    .update({ title, body })[0];
}

function deleteNote(id) {
  db('notes')
    .returning('id')
    .where({ id })
    .delete()[0];
}

module.exports = { getNotes, getNoteById, addNote, editNote, deleteNote };
