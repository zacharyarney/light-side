const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('../data/db-config.js');
const errorHandler = require('./middleware/errorHandlerMiddleware.js');
const messages = require('./utils/messages.js');
const {
  getByIdFail,
  saved,
  updated,
  deleted,
  putNotFound,
  delNotFound,
} = messages;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Endpoints
app.get('/', async (req, res, next) => {
  try {
    const notes = await db('notes').orderBy('id');
    res.status(200).json({ notes });
  } catch (err) {
    return next(err);
  }
});

app.get('/:id', async (req, res) => {
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

app.post('/', async (req, res, next) => {
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

// Error handling
app.use(errorHandler);
server.use(helmet);

module.exports = app;
  res.send('<h2> Server is connected!</h2>');
})
