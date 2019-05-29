"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _knex = _interopRequireDefault(require("knex"));

const _bookshelf = _interopRequireDefault(require("bookshelf"));

const _knexconfig = _interopRequireDefault(require("./knexconfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Connection
const knex = (0, _knex.default)(_knexconfig.default);
const bookshelf = (0, _bookshelf.default)(knex);

bookshelf.plugin(['virtuals', 'pagination', 'visibility']);
const _default = bookshelf;

exports.default = _default;