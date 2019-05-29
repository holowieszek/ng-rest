"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAll = fetchAll;
exports.create = create;

const _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

const _response = require("../utils/response");

const moviesService = _interopRequireWildcard(require("../services/moviesServices"));

const _asyncWrapper = _interopRequireDefault(require("../utils/asyncWrapper"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { const newObj = {};

 if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { const desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

 if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; 

return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function fetchAll(req, res, next) {
  const {
    error,
    result
  } = await (0, _asyncWrapper.default)(moviesService.fetchAllMovies());

  !error ? (0, _response.returnResponse)(res, _httpStatusCodes.default.OK, result) : next(error);
}

async function create(req, res, next) {
  const {
    error,
    result
  } = await (0, _asyncWrapper.default)(moviesService.createMovie(res.locals.omdb));

  !error ? (0, _response.returnResponse)(res, _httpStatusCodes.default.CREATED, result) : next(error);
}