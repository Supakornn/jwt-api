const jwt = require("jsonwebtoken");
require("dotenv").config();
const { BadRequestError } = require("../errors");
// createToken
const createToken = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  // setup token
  const id = new Date().getDate();
  const token = jwt.sign({ username, password }, process.env.JWT_SECRET, { expiresIn: "30d" });
  res.status(200).json({ msg: "user created", token });
};

// verifyToken
const verifyToken = async (req, res) => {
  const { username, password } = req.user;
  res.status(200).json({ username, password });
};

module.exports = {
  createToken,
  verifyToken
};
