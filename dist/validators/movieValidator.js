"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.movieValidator = movieValidator;

var _joi = _interopRequireDefault(require("joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _asyncWrapper = _interopRequireDefault(require("../utils/asyncWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SCHEMA = {
  title: _joi.default.string().label('title').required()
};

async function movieValidator(req, res, next) {
  const {
    body
  } = req;
  const {
    error
  } = await (0, _asyncWrapper.default)((0, _validate.default)(body, SCHEMA));
  error ? next(error) : next();
}