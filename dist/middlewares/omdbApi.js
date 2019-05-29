"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("../axios"));

var _boom = _interopRequireDefault(require("boom"));

var _asyncWrapper = _interopRequireDefault(require("../utils/asyncWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const omdbApi = async (req, res, next) => {
  const {
    title
  } = req.body;
  const {
    error,
    result
  } = await (0, _asyncWrapper.default)(apiCall(title));
  error !== null ? next(_boom.default.unauthorized(error.response.data.Error)) : null;
  result.data.Error ? next(_boom.default.notFound(result.data.Error)) : null;
  res.locals.omdb = result;
  next();
};

const apiCall = title => {
  return _axios.default.get(`http://www.omdbapi.com/?t=${title}`);
};

var _default = omdbApi;
exports.default = _default;