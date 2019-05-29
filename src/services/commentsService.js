import Comment from '../models/comment';

export function fetchAllComments() {
  return Comment.fetchAll({ withRelated: 'movie' });
}

export async function createComment(data) {
  const { author, comment, movieId } = data;

  const commentQuery = await Comment.forge({ author, comment, movie_id: movieId }).save();

  return commentQuery;
}
