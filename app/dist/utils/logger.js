"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.logStream = void 0;

const _fs = _interopRequireDefault(require("fs"));

const _winston = _interopRequireWildcard(require("winston"));

require("winston-daily-rotate-file");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { const newObj = {};

 if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { const desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

 if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; 

return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LOG_DIR = process.env.LOG_DIR || 'logs';
const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

if (!_fs.default.existsSync(LOG_DIR)) {
  _fs.default.mkdirSync(LOG_DIR);
}

const logger = _winston.default.createLogger({
  transports: [new _winston.default.transports.Console({
    format: _winston.format.combine(_winston.format.colorize(), _winston.format.simple()),
    level: 'info'
  }), new _winston.default.transports.DailyRotateFile({
    format: _winston.format.combine(_winston.format.timestamp(), _winston.format.json()),
    maxFiles: '14d',
    level: LOG_LEVEL,
    dirname: LOG_DIR,
    datePattern: 'YYYY-MM-DD',
    filename: '%DATE%-debug.log'
  })]
});

const logStream = {
  write(message) {
    logger.info(message.toString());
  }

};

exports.logStream = logStream;
const _default = logger;

exports.default = _default;