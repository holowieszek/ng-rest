import Movie from '../models/movie';
import Rating from '../models/rating';

export function fetchAllMovies() {
  return Movie.fetchAll({ withRelated: ['ratings', 'comments'] });
}

export async function createMovie(movie) {
  const { ratings, response, ...parsedData } = prepareMovieInformations(movie);

  const movieQuery = await Movie.forge(parsedData).save();

  const ratingsInformation = ratings.map(rating => ({
    movie_id: movieQuery.id,
    source: rating.Source,
    value: rating.Value
  }))

  ratingsInformation.forEach(async rating => {
    await Rating.forge(rating).save();
  })

  return movieQuery;
}

function prepareMovieInformations(movie) {
  const { data } = movie;

  const movieInformations = {}

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const keyToLowerCase = key.toLowerCase();

      movieInformations[keyToLowerCase] = data[key];
    }
  }

  return movieInformations;
}
