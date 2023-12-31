import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }

      try {
        const { originalname, filename } = req.file;
        // eslint-disable-next-line camelcase
        const { aluno_id } = req.body;

        // eslint-disable-next-line camelcase
        const foto = await Foto.create({ originalname, filename, aluno_id });
        return res.status(201).json(foto);
      } catch (erro) {
        return res.status(500).json({
          errors: [
            'erro verifique o aluno informado',
          ],
        });
      }
    });
  }
}

export default new FotoController();
