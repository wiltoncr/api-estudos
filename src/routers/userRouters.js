import { Router } from 'express';
import UserController from '../controllers/UserController';

const user = new Router();

user.post('/', UserController.store);
user.get('/', UserController.index);
user.get('/:id', UserController.show);
user.put('/:id', UserController.update);
user.delete('/:id', UserController.delete);

export default user;
