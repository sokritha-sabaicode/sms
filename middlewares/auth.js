const kindeClient = require("../services/kinde");

const isAuthenticated = async (req, res, next) => {
  const isAuth = await kindeClient.isAuthenticated(req);
  req.isAuth = isAuth;
  next();
};

module.exports = {
  isAuthenticated,
};
