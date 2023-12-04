/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRouters from './src/routers/homeRouters';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouters);
  }
}

export default new App();
