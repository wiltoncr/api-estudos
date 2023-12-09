/* eslint-disable import/first */
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRouters from './routers/homeRouters';
import userRouters from './routers/userRouters';
import tokenRouters from './routers/tokenRouters';
import alunoRouters from './routers/alunoRouters';
import fotoRouters from './routers/fotoRouters';

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
