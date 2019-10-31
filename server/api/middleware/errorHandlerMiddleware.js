const messages = require('../utils/messages.js');
const { SERVER_ERROR, NOT_FOUND, PUT_NOT_FOUND, DEL_NOT_FOUND } = messages;
module.exports = (err, req, res, next) => {
  console.log(err.message);
  switch (err.message) {
    case 'NOT_FOUND':
      return res.status(404).json({ NOT_FOUND });
    case 'PUT_NOT_FOUND':
      return res.status(404).json({ PUT_NOT_FOUND });
    case 'DEL_NOT_FOUND':
      return res.status(404).json({ DEL_NOT_FOUND });
    default:
      return res.status(500).json({ SERVER_ERROR, err });
  }
};
