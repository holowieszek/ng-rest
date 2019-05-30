import Comment from '../models/comment';

export async function fetchAllComments(page = 1, limit = 10) {
  const comments = await Comment.fetchPage({
    pageSize: limit,
    page,
    withRelated: ['movie']
  })

  return comments;
}

export async function createComment(data) {
  const { author, comment, movieId } = data;

  const commentData = { author, comment, movie_id: movieId };

  const commentQuery = await Comment.forge(commentData).save();

  return commentQuery;
}
