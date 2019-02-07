module.exports = (app) => {
    const user = require('../controller/customer.controller.js');

    app.post('/api/postcustomers', user.create);
    app.get('/api/getcustomers', user.findAll);
    app.get('/api/getcustomers/:id', user.findById);
    app.put('/api/updatecustomers/:id', user.update);
    app.delete('/api/deletecustomers/:id', user.delete);
}