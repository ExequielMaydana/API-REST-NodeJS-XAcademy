const uuid = require("uuid");
const users = require("../models/users.models");
const { hashPassword } = require("../libs/cryp");

const createUser = async (req, res, next) => {
  const { full_name, email, password } = req.body;

  const newUser = await users.create({
    id: uuid.v4(),
    full_name,
    email,
    password: hashPassword(password),
  });

  res.status(200).json(newUser);
};

const getUserById = async (req, res, next) => {
  try {
    const userFound = await users.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!userFound) {
      res
        .status(409)
        .json({ message: `There is no user with this ${req.params.id}` });
    } else {
      res.status(200).json(userFound);
    }
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

module.exports = {
  createUser,
  getUserById,
};
