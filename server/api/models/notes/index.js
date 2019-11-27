const db = require('../../../data/db-config.js');

function getNotes() {
  return db('notes').orderBy('id');
}

function getNoteById(id) {
  return db('notes')
    .where({ id })
    .first();
}

function getNoteWithComments(id) {
  return db('notes')
    .where({ 'notes.id': id })
    .join('comments', { 'comments.note_id': 'notes.id' });
}

function addNote(note) {
  return db('notes')
    .returning('id')
    .insert(note);
}

function editNote(id, noteTitle, noteBody) {
  return db('notes')
    .returning('id')
    .where({ id })
    .update({ noteTitle, noteBody });
}

function deleteNote(id) {
  return db('notes')
    .returning('id')
    .where({ id })
    .delete();
}

module.exports = {
  getNotes,
  getNoteById,
  getNoteWithComments,
  addNote,
  editNote,
  deleteNote,
};
