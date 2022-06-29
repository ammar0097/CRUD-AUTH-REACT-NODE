const HttpError = require("../models/http-error");

const User = require("../models/user");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  let hashedPassword;

  let existingUser;
  try {
    existingUser = await User.findOne({email : email});
    console.log(existingUser);
  } catch (err) {
    const error = new HttpError(
      "signing up failed , please try again later!",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "user exists already, please login instead!",
      422
    );
    return next(error);
  }

  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch {
    const error = new HttpError("could not create user", 500);
    return next(error);
  }

  User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });
};

const login = async (req, res, next) => {};

exports.signup = signup;
exports.login = login;
