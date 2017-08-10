import {Application} from 'express';

const authController = require('../../controllers/auth');

export function setupAuthorizationRoutes(app: Application) {

    app.route('/login').post(authController.login);
    app.route('/register').post(authController.register);
    app.route('/logout').delete(authController.logout);
}
