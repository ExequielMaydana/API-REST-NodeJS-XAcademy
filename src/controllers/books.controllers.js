const uuid = require("uuid");
const books = require("../models/books.models");
const libraries = require("../models/libraries.model");

const createBooks = async (req, res, next) => {
  const { isbn, title, author, year, libraryId } = req.body;

  try {
    const newBook = await books.create({
      id: uuid.v4(),
      isbn,
      title,
      author,
      year,
      libraryId,
    });

    res
      .status(201)
      .json({ message: "the book has been successfully created", newBook });
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const getAllBooks = async (req, res, next) => {
  try {
    const todoBooks = await books.findAll({
      include: [
        {
          model: libraries,
        },
      ],
    });
    res.status(200).json({ items: todoBooks.length, books: todoBooks });
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const getBookById = async (req, res, next) => {
  try {
    const bookFound = await books.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ model: libraries }],
    });

    if (!bookFound) {
      res
        .status(404)
        .json({ message: `The book with the ${req.params.id} does not exist` });
    } else {
      res.status(200).json({ bookFound });
    }
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const editBook = async (req, res, next) => {
  try {
    const newBook = await books.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (newBook) {
      const bookModified = await books.findOne({
        where: { id: req.params.id },
      });
      res.status(200).json({
        message: "The book was successfully modified",
        book: bookModified,
      });
    }
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

const deleteBook = async (req, res, next) => {
  try {
    await books.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json();
  } catch (error) {
    res.status(400).json(error);
    return next();
  }
};

module.exports = {
  createBooks,
  getAllBooks,
  getBookById,
  editBook,
  deleteBook,
};
