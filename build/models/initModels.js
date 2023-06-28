"use strict";

var libraries = require("../models/libraries.model");
var books = require("../models/books.models");
var initModels = function initModels() {
  libraries.hasMany(books);
  books.belongsTo(libraries);
};
module.exports = {
  initModels: initModels
};