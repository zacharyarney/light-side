module.exports = (err, req, res, next) => {
  switch (err.message) {
    case 'CONTENT_REQUIRED':
      return res
        .status(400)
        .json({ message: 'Please provide both a title and a body.' });
    // case 'NOT_FOUND':
    //   return res
    //     .status(404)
    //     .json({ message: "Hmmm... I can't find that one." });
    default:
      return res.status(500).json(err);
  }

  next();
};
