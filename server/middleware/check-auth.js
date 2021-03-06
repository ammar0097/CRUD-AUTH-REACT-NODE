
const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  try {
    const token = req.header("accessToken"); //
    if (!token) {
      const error = new HttpError("authentication failed!", 401);
      return next(error);
    }
   const decodedToken =  jwt.verify(token,"supersecret_dont_share");
   req.userData = {userId : decodedToken.userId}
   next();
  } catch (err) {
    const error = new HttpError("authentication failed!", 401);
    return next(error);
  }
};
