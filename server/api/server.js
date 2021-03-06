const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/auth/authRoutes.js');
const notesRoutes = require('./routes/notes/notesRoutes.js');
const commentsRoutes = require('./routes/comments/commentsRoutes.js');
const usersRoutes = require('./routes/users/usersRoutes.js');
const logger = require('./middleware/loggerMiddleware.js');
const errorHandler = require('./middleware/errorHandlerMiddleware.js');
const authMiddleware = require('./middleware/authMiddleware.js');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(logger);

// Routes
app.use('/auth', authRoutes);
app.use('/notes', authMiddleware, notesRoutes);
app.use('/comments', authMiddleware, commentsRoutes);
app.use('/users', authMiddleware, usersRoutes);

// Error handling
app.use(errorHandler);

module.exports = app;
