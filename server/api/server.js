const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('../data/db-config.js');
const errorHandler = require('./middleware/errorHandlerMiddleware.js');

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


const server = express();

// Error handling
app.use(errorHandler);
server.use(helmet);

module.exports = app;
  res.send('<h2> Server is connected!</h2>');
})
