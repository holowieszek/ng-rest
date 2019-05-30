"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var commentsController = _interopRequireWildcard(require("../controllers/comments"));

var _commentValidator = require("../validators/commentValidator");

var _paginationValidator = require("../validators/paginationValidator");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const router = (0, _express.Router)();
router.get('/', _paginationValidator.paginationValidator, commentsController.fetchAll);
router.post('/', _commentValidator.commentValidator, commentsController.create);
var _default = router;
exports.default = _default;