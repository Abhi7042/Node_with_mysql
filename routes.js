const express = require('express')
const routes = express.Router();
const userController = require('./controllers/usersController');


routes.get('/', userController.getAllUsers);
routes.get('/createUser', userController.createUser);
routes.get('/user/:id', userController.getUsers);
routes.post('/del/:id', userController.deleteUser);
routes.post('/update/:id', userController.updateUser);

module.exports = routes;
