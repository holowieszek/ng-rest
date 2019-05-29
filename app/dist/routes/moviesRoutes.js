"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _express = require("express");

const moviesController = _interopRequireWildcard(require("../controllers/movies"));

const _omdbApi = _interopRequireDefault(require("../middlewares/omdbApi"));

const _movieValidator = require("../validators/movieValidator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { const newObj = {};

 if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { const desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

 if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; 

return newObj; } }

const router = (0, _express.Router)();

router.get('/', moviesController.fetchAll);
router.post('/', _movieValidator.movieValidator, _omdbApi.default, moviesController.create);
const _default = router;

exports.default = _default;