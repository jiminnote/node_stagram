const userDao = require('../models/userDao')
const bcrypt  = require('bcrypt')
const jwt     = require('jsonwebtoken')
const { validateEmail,validatePassword } = require("../utils/validators");

const dotenv  = require('dotenv')
dotenv.config()

const signUp = async (name, email, nickname, password) => {
    validateEmail(email);
    validatePassword(password);

    const user = await userDao.getUserByEmail(email);

    if (user) {
        const err = new Error("duplicated email");
        err.statusCode = 409;
        throw err;
      }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userDao.createUser(name, email, nickname, hashedPassword);

    };

const signIn = async (email, password) => {
    const user = await userDao.getUserByEmail(email);
    if (!user) {
        const err = new Error("specified user does not exist");
        err.statusCode = 404;
        throw err;
      }

    const result = await bcrypt.compare(password, user.password.toString());

  if (!result) {
    const err = new Error("invalid password");
    err.statusCode = 400;
    throw err;
  }

  return jwt.sign({ sub: user.id, email: user.email }, process.env.SECRET_KEY);
};

  module.exports = {
    signUp,
    signIn
};