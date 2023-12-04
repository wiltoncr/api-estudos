import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const home = new Router();

home.get('/', HomeController.index);

export default home;
