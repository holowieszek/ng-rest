"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllComments = fetchAllComments;
exports.createComment = createComment;

var _comment = _interopRequireDefault(require("../models/comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchAllComments() {
  return _comment.default.fetchAll({
    withRelated: 'movie'
  });
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