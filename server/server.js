require('dotenv').config({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('express-cors');

const Logger = require('./tracer');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT;
const AppName = process.env.APP_NAME;
const allowedOrigins = process.env.allowedOrigins;

app.use(cors({
  allowedOrigins: allowedOrigins.split(',')
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.use((req, res, next) => {
  res.send({ error: '404' });
});

app.listen(PORT, (err) => {
  if (err) {
    Logger.error(`${AppName} failed to start due an error: ${err}`);
  }
  Logger.info(`${AppName} started on port: ${PORT}`);
});