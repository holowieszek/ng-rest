"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _express = require("express");

const _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

const _moviesRoutes = _interopRequireDefault(require("./routes/moviesRoutes"));

const _commentsRoutes = _interopRequireDefault(require("./routes/commentsRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();

router.get('/', (req, res) => {
  res.status(_httpStatusCodes.default.OK).json({
    title: req.app.locals.title,
    version: req.app.locals.version
  });
});
router.use('/movies', _moviesRoutes.default);
router.use('/comments', _commentsRoutes.default);
const _default = router;

exports.default = _default;