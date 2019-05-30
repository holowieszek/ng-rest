"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _moviesRoutes = _interopRequireDefault(require("./routes/moviesRoutes"));

var _commentsRoutes = _interopRequireDefault(require("./routes/commentsRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => {
  const {
    title,
    version
  } = req.app.locals;
  res.status(_httpStatusCodes.default.OK).json({
    title,
    version
  });
});
router.use('/movies', _moviesRoutes.default);
router.use('/comments', _commentsRoutes.default);
var _default = router;
exports.default = _default;