"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = notFound;
exports.methodNotAllowed = methodNotAllowed;
exports.bodyParser = bodyParser;
exports.genericErrorHandler = genericErrorHandler;

const _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

const _logger = _interopRequireDefault(require("../utils/logger"));

const _buildError = _interopRequireDefault(require("../utils/buildError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function notFound(req, res) {
  res.status(_httpStatusCodes.default.NOT_FOUND).json({
    error: {
      code: _httpStatusCodes.default.NOT_FOUND,
      message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.NOT_FOUND)
    }
  });
}

function methodNotAllowed(req, res) {
  res.status(_httpStatusCodes.default.METHOD_NOT_ALLOWED).json({
    error: {
      code: _httpStatusCodes.default.METHOD_NOT_ALLOWED,
      message: _httpStatusCodes.default.getStatusText(_httpStatusCodes.default.METHOD_NOT_ALLOWED)
    }
  });
}

function bodyParser(err, req, res, next) {
  _logger.default.info(err.message);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: _httpStatusCodes.default.getStatusText(err.status)
    }
  });
}

function genericErrorHandler(err, req, res, next) {
  process.env.NODE_ENV !== 'test' ? _logger.default.info(err.stack) : next();
  const error = (0, _buildError.default)(err);

  res.status(error.code).json({
    error
  });
}