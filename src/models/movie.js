import bookshelf from '../db';

const TABLE_NAME = 'movies';

class Movie extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default Movie;
