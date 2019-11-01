const express = require('express');
const noteController = require('../../controllers/notes');
const { getNotes, getNoteById, addNote, editNote, deleteNote } = noteController;

const router = express.Router();

router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', addNote);
router.put('/:id', editNote);
router.delete('/:id', deleteNote);

module.exports = router;
