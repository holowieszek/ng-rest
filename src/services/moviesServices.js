import Movie from '../models/movie';

export function fetchAllMovies() {
  return Movie.fetchAll();
}

export function createMovie(movie) {
  const { data } = movie;
  let movieInformations = {}

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      let keyToLowerCase = key.toLowerCase();
      movieInformations[keyToLowerCase] = data[key];
    }
  }

  const { ratings, response, ...parsedData } = movieInformations;

  return Movie.forge(parsedData).save();
}
