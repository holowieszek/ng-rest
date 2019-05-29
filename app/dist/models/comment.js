"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _db = _interopRequireDefault(require("../db"));

const _movie = _interopRequireDefault(require("./movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'comments';

class Comment extends _db.default.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  movie() {
    return this.belongsTo(_movie.default);
  }

}

const _default = Comment;

exports.default = _default;