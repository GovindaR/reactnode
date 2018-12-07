// es5
// require('./knexdb');
// const express = require('express')
// const morgan = require('morgan')

// es6
import './knexdb';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import router from './router';
import logger from './logger';

const app = express();
const port = 8080;

// for globle access db
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use('/api', router);
app.listen(port, () => logger.verbose('server running'));
