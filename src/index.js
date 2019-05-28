import './env';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';

import logger, { logStream } from './utils/logger';
import * as errorHandler from './middlewares/errorHandler';
import routes from './routes';

const app = express();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

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

// Error Handlers
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.notFound);
app.use(errorHandler.methodNotAllowed);

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server works on ${app.get('host')}:${app.get('port')}`);
});
