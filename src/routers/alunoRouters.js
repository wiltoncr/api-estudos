import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const aluno = new Router();

aluno.get('/', AlunoController.index);
aluno.post('/', loginRequired, AlunoController.store);
aluno.put('/:id', loginRequired, AlunoController.update);
aluno.get('/:id', AlunoController.show);
aluno.delete('/:id', loginRequired, AlunoController.delete);

export default aluno;
