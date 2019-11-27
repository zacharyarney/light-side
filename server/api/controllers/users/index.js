const userModel = require('../../models/users');
const messages = require('../../utils/messages.js');

const {
  USER: { SAVED, UPDATED, DELETED },
} = messages;

function getUsers(req, res, next) {
  userModel
    .getUsers()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => next(err));
}

function getUserById(req, res, next) {
  userModel
    .getUserById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new Error('NOT_FOUND');
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((err) => next(err));
}

function getUserWithNotes(req, res, next) {
  userModel
    .getUserWithNotes(req.params.id)
    .then((user) => {
      if (!user) {
        throw new Error('NOT_FOUND');
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((err) => next(err));
}

function getUserWithComments(req, res, next) {
  userModel
    .getUserWithComments(req.params.id)
    .then((user) => {
      if (!user) {
        throw new Error('NOT_FOUND');
      } else {
        res.status(200).json({ user });
      }
    })
    .catch((err) => next(err));
}

function addUser(req, res, next) {
  const { username } = req.body;
  const user = { username };

  userModel
    .addUser(user)
    .then((id) => {
      res.status(200).json({ message: SAVED, id });
    })
    .catch((err) => next(err));
}

// Need to change up req.params to accomodate new routes
function editUser(req, res, next) {
  const { username } = req.body;

  userModel
    .editUser(req.params.id, username)
    .then((id) => {
      if (!id.length) {
        throw new Error('PUT_NOT_FOUND');
      } else {
        res.status(200).json({ message: UPDATED, id });
      }
    })
    .catch((err) => next(err));
}

function deleteUser(req, res, next) {
  userModel
    .deleteUser(req.params.id)
    .then((id) => {
      if (!id.length) {
        throw new Error('DEL_NOT_FOUND');
      } else {
        res.status(200).json({ message: DELETED, id });
      }
    })
    .catch((err) => next(err));
}

module.exports = {
  getUsers,
  getUserById,
  getUserWithNotes,
  getUserWithComments,
  addUser,
  editUser,
  deleteUser,
};
