const messages = require('../utils/messages.js');
const {
  USER,
  NOTE,
  COMMENT,
  SERVER_ERROR,
  NOT_FOUND,
  PUT_NOT_FOUND,
  DEL_NOT_FOUND,
} = messages;
module.exports = (err, req, res, next) => {
  console.log(err.message);
  switch (err.message) {
    case 'NOT_FOUND':
      return res.status(404).json({ NOT_FOUND });
    case 'PUT_NOT_FOUND':
      return res.status(404).json({ PUT_NOT_FOUND });
    case 'DEL_NOT_FOUND':
      return res.status(404).json({ DEL_NOT_FOUND });
    case 'USER_CONTENT_REQUIRED':
      return res.status(400).json({ CONTENT_REQUIRED: USER.CONTENT_REQUIRED });
    case 'NOTE_CONTENT_REQUIRED':
      return res.status(400).json({ CONTENT_REQUIRED: NOTE.CONTENT_REQUIRED });
    case 'COMMENT_CONTENT_REQUIRED':
      return res.status(400).json({ CONTENT_REQUIRED: COMMENT.CONTENT_REQUIRED });
    default:
      return res.status(500).json({ SERVER_ERROR, err });
  }
};
