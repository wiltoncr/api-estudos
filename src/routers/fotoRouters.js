import { Router } from 'express';
import multer from 'multer';

import FotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const foto = new Router();

foto.post('/', upload.single('foto'), FotoController.store);

export default foto;
