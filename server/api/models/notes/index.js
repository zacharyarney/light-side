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

function editNote(id, title, body) {
  return db('notes')
    .returning('id')
    .where({ id })
    .update({ title, body })[0];
}

function deleteNote(id) {
  return db('notes')
    .returning('id')
    .where({ id })
    .delete()[0];
}

module.exports = {
  getNotes,
  getNoteById,
  getNoteWithComments,
  addNote,
  editNote,
  deleteNote,
};
