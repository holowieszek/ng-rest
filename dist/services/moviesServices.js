"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllMovies = fetchAllMovies;
exports.createMovie = createMovie;

var _movie = _interopRequireDefault(require("../models/movie"));

var _rating = _interopRequireDefault(require("../models/rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function fetchAllMovies(page = 1, limit = 10) {
  const movies = await _movie.default.fetchPage({
    pageSize: limit,
    page,
    withRelated: ['ratings', 'comments']
  });
  return movies;
}

async function createMovie(movie) {
  const {
    ratings,
    response,
    ...parsedData
  } = prepareMovieInformations(movie);
  const movieQuery = await _movie.default.forge(parsedData).save();
  const ratingsInformation = ratings.map(rating => ({
    movie_id: movieQuery.id,
    source: rating.Source,
    value: rating.Value
  }));
  ratingsInformation.forEach(async rating => {
    await _rating.default.forge(rating).save();
  });
  return movieQuery;
}

function prepareMovieInformations(movie) {
  const {
    data
  } = movie;
  const movieInformations = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const keyToLowerCase = key.toLowerCase();
      movieInformations[keyToLowerCase] = data[key];
    }
  }

  return movieInformations;
}