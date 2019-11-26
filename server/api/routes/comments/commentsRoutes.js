const express = require('express');
const commentsController = require('../../controllers/comments');
const {
  getComments,
  getCommentById,
  getCommentsByNote,
  addComment,
  editComment,
  deleteComment,
} = commentsController;

const router = express.Router();

router.get('/', getComments);
router.get('/:id', getCommentById);
router.get('/note/:noteId', getCommentsByNote);
router.post('/', addComment);
router.put('/:id', editComment);
router.delete('/:id', deleteComment);

module.exports = router;


