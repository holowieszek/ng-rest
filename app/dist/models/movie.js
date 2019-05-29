"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _db = _interopRequireDefault(require("../db"));

const _rating = _interopRequireDefault(require("./rating"));

const _comment = _interopRequireDefault(require("./comment"));

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

const _default = Movie;

exports.default = _default;