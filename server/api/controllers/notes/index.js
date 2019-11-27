const noteModel = require('../../models/notes');
const validation = require('../../utils/validation.js');
const messages = require('../../utils/messages.js');

const {
  NOTE: { SAVED, UPDATED, DELETED },
} = messages;

function getNotes(req, res, next) {
  noteModel
    .getNotes()
    .then((notes) => {
      res.status(200).json({ notes });
    })
    .catch((err) => next(err));
}

function getNoteById(req, res, next) {
  noteModel
    .getNoteById(req.params.id)
    .then((note) => {
      if (!note) {
        throw new Error('NOT_FOUND');
      } else {
        res.status(200).json({ note });
      }
    })
    .catch((err) => next(err));
}

function getNoteWithComments(req, res, next) {
  noteModel
    .getNoteWithComments(req.params.id)
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
  const { noteTitle, noteBody, user_id } = req.body;
  const note = { noteTitle, noteBody, user_id };

  if (!validation(noteTitle, noteBody)) {
    throw new Error('NOTE_CONTENT_REQUIRED');
  } else {
    noteModel
      .addNote(note)
      .then((id) => {
        res.status(200).json({ message: SAVED, id: id[0] });
      })
      .catch((err) => next(err));
  }
}

function editNote(req, res, next) {
  const { noteTitle, noteBody } = req.body;

  if (!validation(noteTitle, noteBody)) {
    throw new Error('NOTE_CONTENT_REQUIRED');
  } else {
    noteModel
      .editNote(req.params.id, noteTitle, noteBody)
      .then((id) => {
        if (!id.length) {
          throw new Error('PUT_NOT_FOUND');
        } else {
          res.status(200).json({ message: UPDATED, id: id[0] });
        }
      })
      .catch((err) => next(err));
  }
}

function deleteNote(req, res, next) {
  noteModel
    .deleteNote(req.params.id)
    .then((id) => {
      if (!id.length) {
        throw new Error('DEL_NOT_FOUND');
      } else {
        res.status(200).json({ message: DELETED, id: id[0] });
      }
    })
    .catch((err) => next(err));
}

module.exports = {
  getNotes,
  getNoteById,
  getNoteWithComments,
  addNote,
  editNote,
  deleteNote,
};
