"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../db"));

var _movie = _interopRequireDefault(require("./movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TABLE_NAME = 'ratings';

class Rating extends _db.default.Model {
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

var _default = Rating;
exports.default = _default;