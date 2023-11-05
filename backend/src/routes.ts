import { Router } from 'express';
import { UserController } from './controllers/user-controller';
import { ItemController } from './controllers/item-controller';

export const routes = Router();
const userController = new UserController();
const itemController = new ItemController();

// users
routes.post('/user', userController.create);
routes.post('/login', userController.login);
routes.post('/confirm', userController.confirmPresence);
routes.post('/admin', userController.createAdmin);

// items
routes.get('/items', itemController.find);
routes.post('/item', itemController.create);
routes.post('/pick', itemController.pick);
routes.post('/all-items', itemController.findAll);
