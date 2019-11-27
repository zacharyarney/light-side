const commentModel = require('../../models/comments');
const messages = require('../../utils/messages.js');

const {
  COMMENT: { SAVED, UPDATED, DELETED },
} = messages;

function getComments(req, res, next) {
  commentModel
    .getComments()
    .then((comments) => {
      res.status(200).json({ comments });
    })
    .catch((err) => next(err));
}

function getCommentById(req, res, next) {
  commentModel
    .getCommentById(req.params.id)
    .then((comment) => {
      if (!comment) {
        throw new Error('NOT_FOUND');
      } else {
        res.status(200).json({ comment });
      }
    })
    .catch((err) => next(err));
}

function getCommentsByNote(req, res, next) {
  commentModel
    .getCommentsByNote(req.params.noteId)
    .then((comments) => {
      if (!comments) {
        //Need a new message for no comments on a note
        throw new Error('NOT_FOUND');
      } else {
        res.status(200).json({ comments });
      }
    })
    .catch((err) => next(err));
}

function addComment(req, res, next) {
  const { commentBody, user_id, note_id } = req.body;
  const comment = { commentBody, user_id, note_id };

  commentModel
    .addComment(comment)
    .then((id) => {
      res.status(200).json({ message: SAVED, id });
    })
    .catch((err) => next(err));
}

function editComment(req, res, next) {
  const { commentBody, user_id, note_id } = req.body;
  const comment = { commentBody, user_id, note_id };

  commentModel
    .editComment(req.params.id, comment)
    .then((id) => {
      if (!id.length) {
        throw new Error('PUT_NOT_FOUND');
      } else {
        res.status(200).json({ message: UPDATED, id });
      }
    })
    .catch((err) => next(err));
}

function deleteComment(req, res, next) {
  commentModel
    .deleteComment(req.params.id)
    .then((id) => {
      if (!id.length) {
        throw new Error('DELETE_NOT_FOUND');
      } else {
        res.status(200).json({ message: DELETED, id });
      }
    })
    .catch((err) => next(err));
}

module.exports = {
  getComments,
  getCommentById,
  getCommentsByNote,
  addComment,
  editComment,
  deleteComment,
};
