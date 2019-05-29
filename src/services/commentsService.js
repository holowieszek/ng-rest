import Comment from '../models/comment';

export function fetchAllComments() {
  return Comment.fetchAll({ withRelated: 'movie' });
}

export async function createComment(data) {
  const { author, comment, movieId } = data;

  const commentData = { author, comment, movie_id: movieId };

  const commentQuery = await Comment.forge(commentData).save();

  return commentQuery;
}
