/* eslint-disable import/first */
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import homeRouters from './src/routers/homeRouters';
import userRouters from './src/routers/userRouters';
import tokenRouters from './src/routers/tokenRouters';
import alunoRouters from './src/routers/alunoRouters';
import fotoRouters from './src/routers/fotoRouters';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouters);
    this.app.use('/users', userRouters);
    this.app.use('/tokens', tokenRouters);
    this.app.use('/aluno', alunoRouters);
    this.app.use('/fotos', fotoRouters);
  }
}

export default new App();
