import bookshelf from '../db';
import Rating from './rating';

const TABLE_NAME = 'movies';

class Movie extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  ratings() {
    return this.hasMany(Rating);
  }
}

export default Movie;
