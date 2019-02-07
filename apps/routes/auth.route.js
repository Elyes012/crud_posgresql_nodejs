module.exports = (app) => {
    
    const authController = require('../controller/login.controller');
    app.post('/api/login', authController.login);
}