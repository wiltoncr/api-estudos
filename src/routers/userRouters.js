import { Router } from 'express';
import UserController from '../controllers/UserController';

const user = new Router();

user.post('/', UserController.store);

export default user;
