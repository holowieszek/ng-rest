"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instance = _axios.default.create();

instance.interceptors.request.use(config => {
  if (config.url.includes('omdbapi.com')) {
    config.params = {
      apikey: process.env.OMDB_API
    };
  }

  return config;
});
const _default = instance;

exports.default = _default;