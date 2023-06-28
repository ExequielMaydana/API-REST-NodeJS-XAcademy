const uuid = require("uuid");

const books = require("../models/books.models");
const libraries = require("../models/libraries.model");

const createLibrary = async (req, res, next) => {
  const { name, location, phone } = req.body;

  try {
    const newLibrary = await libraries.create({
      id: uuid.v4(),
      name,
      location,
      phone,
    });
    res.status(201).json({
      message: "The bookstore was successfully created",
      library: newLibrary,
    });
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const getAllLibraries = async (req, res, next) => {
  try {
    const todoLibraries = await libraries.findAll({
      include: [
        {
          model: books,
        },
      ],
    });
    res
      .status(200)
      .json({ items: todoLibraries.length, libraries: todoLibraries });
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const getLibraryById = async (req, res, next) => {
  try {
    const lib = await libraries.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!lib) {
      res.status(400).json({
        message: `The library with the ${req.params.id} does not exist`,
      });
    } else {
      res.status(200).json({ library: lib });
    }
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const editLibrary = async (req, res, next) => {
  try {
    const newLibrary = await libraries.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (newLibrary) {
      const libraryModified = await libraries.findOne({
        where: { id: req.params.id },
      });
      res.status(200).json({
        message: "The book was successfully modified",
        book: libraryModified,
      });
    }
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const deleteLibrary = async (req, res, next) => {
  try {
    await libraries.destroy({
      where: req.params.id,
    });
    res.status(204).json({});
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const addBook = async (req, res, next) => {
  try {
    const newBook = await books.create({
      ...req.body,
      libraryId: req.params.id,
    });
    res
      .status(201)
      .json({
        message: `The book was successfully created in the bookstore ${req.params.id}`,
        book: newBook,
      });
  } catch (error) {
    res.status(400).json(error)
    return next()
  }
};

module.exports = {
  createLibrary,
  getAllLibraries,
  getLibraryById,
  editLibrary,
  deleteLibrary,
  addBook
};
