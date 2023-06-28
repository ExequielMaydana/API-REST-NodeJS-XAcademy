const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../libs/cryp");
const users = require("../models/users.models");

const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  const userFound = await users.findOne({
    where: {
      email,
    },
  });

  if (!userFound)
    return res.status(401).json({ message: "Invalid credentials" });

  const matchPassword = comparePassword(
    password,
    userFound.dataValues.password
  );

  if (!matchPassword)
    return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: userFound.dataValues.id, email: userFound.dataValues.email },
    "megustaelarte",
    {
      expiresIn: 86400,
    }
  );

  res.status(200).json({ user: userFound, token: token });
};

module.exports = {
  logIn,
};
