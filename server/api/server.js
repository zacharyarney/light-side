const express = require('express');
const knex = require('knex');
const cors = require('cors');
const helmet = require('helmet');
const db = require('../data/db-config.js');
const notesRoutes = require('./notes/notesRoutes.js');
const logger = require('./middleware/loggerMiddleware.js');
const errorHandler = require('./middleware/errorHandlerMiddleware.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);
app.use('/notes', notesRoutes);

// Endpoints

// Error handling
app.use(errorHandler);

module.exports = app;
