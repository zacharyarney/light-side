const express = require('express');
const userController = require('../../controllers/users');
const {
  getUsers,
  getUserById,
  getUserWithNotes,
  getUserWithComments,
  addUser,
  editUser,
  deleteUser,
} = userController;

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id/notes', getUserWithNotes);
router.get('/:id/comments', getUserWithComments);
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
