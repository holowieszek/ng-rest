"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./env");

require("./db");

const _express = _interopRequireDefault(require("express"));

const _morgan = _interopRequireDefault(require("morgan"));

const _cors = _interopRequireDefault(require("cors"));

const _helmet = _interopRequireDefault(require("helmet"));

const _compression = _interopRequireDefault(require("compression"));

const _bodyParser = _interopRequireDefault(require("body-parser"));

const _logger = _interopRequireWildcard(require("./utils/logger"));

const errorHandler = _interopRequireWildcard(require("./middlewares/errorHandler"));

const _routes = _interopRequireDefault(require("./routes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { const newObj = {};

 if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { const desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

 if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; 

return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const APP_PORT = (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);
app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use((0, _compression.default)());
app.use(_bodyParser.default.json());
app.use((0, _morgan.default)('tiny', {
  stream: _logger.logStream
}));
app.use(errorHandler.bodyParser); // Routing

app.use('/api', _routes.default); // Error Handlers

app.use(errorHandler.notFound); // app.use(errorHandler.methodNotAllowed);

app.use(errorHandler.genericErrorHandler);
app.listen(app.get('port'), app.get('host'), () => {
  _logger.default.info(`Server works on ${app.get('host')}:${app.get('port')}`);
}); // Catch unhandled rejections

process.on('unhandledRejection', err => {
  _logger.default.error('Unhandled rejection', err);
});
const _default = app;

exports.default = _default;