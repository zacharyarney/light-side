const db = require('../../../data/db-config.js');

function getComments() {
  return db('comments').orderBy('id');
}

function getCommentById(id) {
  return db('comments')
    .where({ id })
    .first();
}

function getCommentsByNote(noteId) {
  return db('comments').where({ note_id: noteId });
}

function addComment(comment) {
  return db('comments')
    .returning('id')
    .insert(comment);
}

function editComment(id, comment) {
  return db('comments')
    .returning('id')
    .where({ id })
    .update(comment);
}

function deleteComment(id) {
  return db('comments')
    .returning('id')
    .where({ id })
    .delete();
}

module.exports = {
  getComments,
  getCommentById,
  getCommentsByNote,
  addComment,
  editComment,
  deleteComment,
};
