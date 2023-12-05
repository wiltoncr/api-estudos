/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRouters from './src/routers/homeRouters';
import userRouters from './src/routers/userRouters';

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
    this.app.use('/users', userRouters);
  }
}

export default new App();
