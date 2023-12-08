import { Router } from 'express';

import FotoController from '../controllers/FotoController';

const foto = new Router();

foto.post('/', FotoController.store);

export default foto;
