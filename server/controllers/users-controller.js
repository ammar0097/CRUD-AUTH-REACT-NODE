const HttpError = require("../models/http-error");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  let hashedPassword;
  let existingUser;

  try {
    existingUser = await User.findOne({ where: { email: email } });
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
  } catch (err) {
    const error = new HttpError("could not create user", 500);
    return next(error);
  }

  const createdUser = User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  console.log(createdUser);

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      "supersecret_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "signing up failed , please try again later!",
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  let existingUser;
  try {
    existingUser = await User.findOne({ where: { email: email } });
  } catch {
    const error = new HttpError("login in failed try again later", 500);
    return next(error);
  }
  if (!existingUser) {
    const error = new HttpError("invalid credentials , could not login", 401);
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("invalid password", 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("invalid credentials , could not login", 401);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "supersecret_dont_share",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "signing up failed , please try again later!",
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({ userId: existingUser.id, email: existingUser.email, token: token });

};

exports.signup = signup;
exports.login = login;
