import './env';

import express from 'express';

const app = express();

app.set('port', process.env.APP_PORT);
app.set('host', process.env.APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.listen(app.get('port'), app.get('host'), () => {});
