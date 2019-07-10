module.exports = errHandler = (req, res, next) => {
  if (!req.query.color) {
    res.status(400).send('Missing query parameter color');
  } else {
    next();
  }
};
