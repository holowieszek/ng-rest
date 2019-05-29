"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _bookshelf = _interopRequireDefault(require("bookshelf"));

var _knexconfig = _interopRequireDefault(require("./knexconfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Connection
const knex = (0, _knex.default)(_knexconfig.default);
const bookshelf = (0, _bookshelf.default)(knex);
bookshelf.plugin(['virtuals', 'pagination', 'visibility']);
var _default = bookshelf;
exports.default = _default;