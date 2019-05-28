import './env';

import express from 'express';
import morgan from 'morgan';
import logger, { logStream } from './utils/logger';

const app = express();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.use(morgan('tiny', { stream: logStream }));

app.listen(app.get('port'), app.get('host'), () => {
  logger.info(`Server works on ${app.get('host')}:${app.get('port')}`);
});
