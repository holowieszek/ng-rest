import Movie from '../models/movie';

export function fetchAllMovies() {
  return Movie.fetchAll();
}

export function createMovie(name) {
  return Movie.forge({ name }).save();
}
