// rethink error handling.
// Maybe this should just throw an error to send to errorHandlerMiddleware.
// Could create a new error class or object to dynamically throw errors
// or set up different error functions.
// food for thought...
module.exports = (title, body) => {
  if (!title || !body) {
    return false;
  } else {
    return true;
  }
};
