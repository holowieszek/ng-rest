"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentValidator = commentValidator;

var _joi = _interopRequireDefault(require("joi"));

var _validate = _interopRequireDefault(require("../utils/validate"));

var _asyncWrapper = _interopRequireDefault(require("../utils/asyncWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SCHEMA = {
  author: _joi.default.string().label('author').required(),
  comment: _joi.default.string().label('comment').required(),
  movieId: _joi.default.number().label('movieId').required()
};

async function commentValidator(req, res, next) {
  const {
    body
  } = req;
  const {
    error
  } = await (0, _asyncWrapper.default)((0, _validate.default)(body, SCHEMA));
  error ? next(error) : next();
}