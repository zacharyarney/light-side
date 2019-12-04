const express = require('express');
const userController = require('../../controllers/users');
const {
  getUsers,
  getUserByUsername,
  getUserWithNotes,
  getUserWithComments,
  addUser,
  editUser,
  deleteUser,
} = userController;

const router = express.Router();

router.get('/', getUsers);
router.get('/:username', getUserByUsername);
router.get('/:username/notes', getUserWithNotes);
router.get('/:username/comments', getUserWithComments);
router.post('/', addUser);
router.put('/:username', editUser);
router.delete('/:username', deleteUser);

module.exports = router;
