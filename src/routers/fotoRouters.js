import { Router } from 'express';

import FotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const foto = new Router();

foto.post('/', loginRequired, FotoController.store);

export default foto;
