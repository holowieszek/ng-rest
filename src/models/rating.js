import bookshelf from '../db';
import Movie from './movie';

const TABLE_NAME = 'ratings';

class Rating extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  movie() {
    return this.belongsTo(Movie);
  }
}

export default Rating;
