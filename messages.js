module.exports = errHandler = (req, res, next) => {
  // Check if the query parameter color is part of the request
  if (!req.query.color) {
    // If not - respond with an error message
    res.status(400).send('Missing query parameter color');
  } else {
    // Otherwise continue
    next();
  }
};
