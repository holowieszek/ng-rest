"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginationValidator = paginationValidator;

var _joi = _interopRequireDefault(require("joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _asyncWrapper = _interopRequireDefault(require("../utils/asyncWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SCHEMA = {
  page: _joi.default.number().positive(),
  limit: _joi.default.number().positive()
};

async function paginationValidator(req, res, next) {
  const {
    query
  } = req;
  const {
    error
  } = await (0, _asyncWrapper.default)((0, _validate.default)(query, SCHEMA));
  error ? next(error) : next();
}