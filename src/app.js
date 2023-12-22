/* eslint-disable import/first */
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import homeRouters from './routers/homeRouters';
import userRouters from './routers/userRouters';
import tokenRouters from './routers/tokenRouters';
import alunoRouters from './routers/alunoRouters';
import fotoRouters from './routers/fotoRouters';

const whiteList = [
  'http://localhost:3000',
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
    // this.app.use('/images/', express.static(resolve(__dirname, 'uploads')));
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
