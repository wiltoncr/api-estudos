import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';

const aluno = new Router();

aluno.get('/', AlunoController.index);

export default aluno;
