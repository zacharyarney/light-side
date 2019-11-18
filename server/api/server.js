const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const notesRoutes = require('./routes/notes/notesRoutes.js');
const commentsRoutes = require('./routes/comments/commentsRoutes.js');
const usersRoutes = require('./routes/users/usersRoutes.js');
const logger = require('./middleware/loggerMiddleware.js');
const errorHandler = require('./middleware/errorHandlerMiddleware.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);

// Routes
app.use('/notes', notesRoutes);
// app.use('/comments', commentsRoutes);
// app.use('/users', usersRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;
