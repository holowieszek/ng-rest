import './env';
import './db';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';

import logger, { logStream } from './utils/logger';
import * as errorHandler from './middlewares/errorHandler';
import routes from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();

const APP_PORT =
  (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(morgan('tiny', { stream: logStream }));
app.use(errorHandler.bodyParser);

// Routing
app.use('/api', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Error Handlers
app.use(errorHandler.notFound);
// app.use(errorHandler.methodNotAllowed);
app.use(errorHandler.genericErrorHandler);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server works on ${app.get('host')}:${app.get('port')}`);
});

// Catch unhandled rejections
process.on('unhandledRejection', err => {
  logger.error('Unhandled rejection', err);
});

export default app;
