"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.returnResponse = void 0;

const returnResponse = (res, status = 200, data) => {
  return res.status(status).json({
    data
  });
};

exports.returnResponse = returnResponse;