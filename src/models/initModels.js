const libraries = require("../models/libraries.model");
const books = require("../models/books.models");

const initModels = () => {
  libraries.hasMany(books);
  books.belongsTo(libraries);
};

module.exports = {
  initModels,
};
