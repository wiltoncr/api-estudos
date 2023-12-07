import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const user = new Router();

// user.get('/', loginRequired, UserController.index);
// user.get('/:id', UserController.show);

user.post('/', UserController.store);
user.put('/', loginRequired, UserController.update);
user.delete('/', loginRequired, UserController.delete);

export default user;
