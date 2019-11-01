const noteModel = require('../../models/notes');
const validation = require('../../utils/validation.js');
const messages = require('../../utils/messages.js');
const { SAVED, UPDATED, DELETED } = messages;

function getNotes(req, res, next) {
  notesModel
    .getNotes()
    .then((notes) => {
      res.status(200).json({ notes });
    })
    .catch((err) => next(err));
}

function getNoteById(req, res, next) {
  noteModel
    .getNoteById()
    .then((note) => {
      if (!note) {
        throw new Error('NOT_FOUND');
      } else {
        res.status(200).json({ note });
      }
    })
    .catch((err) => next(err));
}

function addNote(req, res, next) {
  const { noteTitle, noteBody } = req.body;
  const note = { noteTitle, noteBody };

  validation(noteTitle, noteBody);

  noteModel
    .addNote(note)
    .then((id) => {
      res.status(200).json({ message: SAVED, id: id });
    })
    .catch((err) => next(err));
}

function editNote(req, res, next) {
  const { noteTitle, noteBody } = req.body;

  if (!noteTitle || !noteBody) {
    return validation();
  }

  noteModel
    .editNote(req.params.id, noteTitle, noteBody)
    .then((id) => {
      if (!id) {
        throw new Error('PUT_NOT_FOUND');
      } else {
        res.status(200).json({ message: UPDATED, id });
      }
    })
    .catch((err) => next(err));
}

function deleteNote(req, res, next) {
  noteModel
    .deleteNote(req.params.id)
    .then((id) => {
      if (!id) {
        throw new Error('DEL_NOT_FOUND');
      } else {
        res.status(200).json({ message: DELETED, id });
      }
    })
    .catch((err) => next(err));
}

module.exports = { getNotes, getNoteById, addNote, editNote, deleteNote };
