const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const DB = require("../utils/db");

//*desc show all Movies
//*route /db/movie/all
//*access Privet
const movieAll = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

//*desc show Movie info
//*route /db/movie/info:id
//*access Privet
const movieInfo = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

//*desc edit Movie
//*route /db/movie/edit:id
//*access Privet
const movieEdit = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

//*desc delete Movie
//*route /db/movie/delete:id
//*access Privet
const movieDelete = asyncHandler(async (req, res) => {
  res.send("Adding Movie");
});

module.exports = {
  movieAll,
  movieInfo,
  movieEdit,
  movieDelete,
};
