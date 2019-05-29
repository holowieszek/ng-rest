"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _rating = _interopRequireDefault(require("./rating"));

var _comment = _interopRequireDefault(require("./comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'movies';

class Movie extends _db.default.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  ratings() {
    return this.hasMany(_rating.default);
  }

  comments() {
    return this.hasMany(_comment.default);
  }

}

var _default = Movie;
exports.default = _default;