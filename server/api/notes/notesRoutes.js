const express = require('express');
const db = require('../../data/db-config.js');
const messages = require('../utils/messages.js');
const {
  getByIdFail,
  saved,
  updated,
  deleted,
  putNotFound,
  delNotFound,
} = messages;

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const notes = await db('notes').orderBy('id');
    res.status(200).json({ notes });
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const note = await db('notes')
      .where('id', req.params.id)
      .first();

    if (note) {
      res.status(200).json({ note });
    } else {
      res.status(404).json({ message: getByIdFail });
    }
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  const { noteTitle, noteBody } = req.body;

  if (!noteTitle || !noteBody) {
    return next(Error('CONTENT_REQUIRED'));
  }

  try {
    const id = await db('notes')
      .returning('id')
      .insert({ noteTitle, noteBody });
    res.status(200).json({ message: saved, id: id });
  } catch (err) {
    return next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const { noteTitle, noteBody } = req.body;

  if (!noteTitle || !noteBody) {
    return next(Error('CONTENT_REQUIRED'));
  }

  try {
    const id = await db('notes')
      .where('id', req.params.id)
      .update({ noteTitle, noteBody }, 'id')

    if (id.length) {
      res.status(200).json({ message: updated, id });
    } else {
      res.status(404).json({ message: putNotFound });
    }
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedNoteId = await db('notes')
      .returning('id')
      .where('id', req.params.id)
      .delete();

    if (deletedNoteId.length) {
      res.status(200).json({ message: deleted, id: deletedNoteId });
    } else {
      res.status(404).json({ message: delNotFound });
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;