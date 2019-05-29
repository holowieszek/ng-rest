import bookshelf from '../db';
import Rating from './rating';
import Comment from './comment';

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

  comments() {
    return this.hasMany(Comment);
  }
}

export default Movie;
