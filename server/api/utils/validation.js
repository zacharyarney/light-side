// rethink error handling.
// Maybe this should just throw an error to send to errorHandlerMiddleware.
// Could create a new error class or object to dynamically throw errors
// or set up different error functions.
// food for thought...
module.exports = (args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (!arg) {
      return false;
    } else {
      return true;
    }
  }
};
