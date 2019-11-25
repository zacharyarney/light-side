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
  db('comments')
    .returning('id')
    .insert({ comment });
}

function editComment(id, comment) {
  db('comments')
    .returning('id')
    .where({ id })
    .update({ comment })[0];
}

function deleteComment(id) {
  db('comments')
    .returning('id')
    .where({ id })
    .delete()[0];
}

module.exports = {
  getComments,
  getCommentById,
  getCommentsByNote,
  addComment,
  editComment,
  deleteComment,
};
