const express = require('express');
const db = require('../../data/db-config.js');
const validation = require('../utils/validation.js');
const messages = require('../utils/messages.js');
const {
  GET_BY_ID_FAIL,
  SAVED,
  UPDATED,
  DELETED,
  PUT_NOT_FOUND,
  DEL_NOT_FOUND,
  SERVER_ERROR,
} = messages;

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const notes = await db('ntes').orderBy('id');
    res.status(200).json({ notes });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const note = await db('notes')
      .where('id', req.params.id)
      .first();

    if (!note) {
      throw new Error('NOT_FOUND');
    } else {
      res.status(200).json({ note });
    }
  } catch (err) {
    next(err);
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
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const { noteTitle, noteBody } = req.body;

  if (!noteTitle || !noteBody) {
    return next(Error('CONTENT_REQUIRED'));
  }

  try {
    const id = await db('notes')
      .returning('id')
      .where('id', req.params.id)
      .update({ noteTitle, noteBody })[0];

    if (!id) {
      throw new Error('PUT_NOT_FOUND');
    } else {
      res.status(200).json({ message: updated, id });
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedNoteId = await db('notes')
      .returning('id')
      .where('id', req.params.id)
      .delete()[0];

    console.log('deletedID', deletedNoteId);
    if (!deletedNoteId) {
      throw new Error('DEL_NOT_FOUND');
    } else {
      res.status(200).json({ message: DELETED, id: deletedNoteId });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
