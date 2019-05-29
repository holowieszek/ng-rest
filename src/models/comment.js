import bookshelf from '../db';
import Movie from './movie';

const TABLE_NAME = 'comments';

class Comment extends bookshelf.Model {
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

export default Comment;
