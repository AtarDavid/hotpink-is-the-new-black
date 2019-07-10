module.exports = logger = (req, res, next) => {
  const time = new Date();
  const { method, path } = req;
  console.log(`Request ${method} on ${path} ${time.toString().slice(0, 33)}`);
  next();
};
