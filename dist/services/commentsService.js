"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllComments = fetchAllComments;
exports.createComment = createComment;

var _comment = _interopRequireDefault(require("../models/comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function fetchAllComments(page = 1, limit = 10) {
  const comments = await _comment.default.fetchPage({
    pageSize: limit,
    page,
    withRelated: ['movie']
  });
  return comments;
}

async function createComment(data) {
  const {
    author,
    comment,
    movieId
  } = data;
  const commentData = {
    author,
    comment,
    movie_id: movieId
  };
  const commentQuery = await _comment.default.forge(commentData).save();
  return commentQuery;
}