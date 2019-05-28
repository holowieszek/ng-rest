import Movie from '../models/movie';

export function fetchAllMovies() {
  return Movie.fetchAll();
}

export async function createMovie(movie) {
  const { data } = movie;
  const movieInformations = {}

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const keyToLowerCase = key.toLowerCase();

      movieInformations[keyToLowerCase] = data[key];
    }
  }

  const { ratings, response, ...parsedData } = movieInformations;

  const movieQuery = await Movie.forge(parsedData).save();
  
  return movieQuery;
}
