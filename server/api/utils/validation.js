module.exports = (title, body) => {
  if (!title || !body) {
    return res
      .status(400)
      .json({ message: 'Please provide both a title and a body.' });
  }
};
