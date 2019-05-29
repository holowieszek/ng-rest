"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const asyncWrapper = promise => promise.then(result => ({
  result,
  error: null
})).catch(error => ({
  error,
  result: null
}));

const _default = asyncWrapper;

exports.default = _default;