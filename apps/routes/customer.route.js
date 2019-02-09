 

module.exports = (app) => {
    const user = require('../controller/customer.controller.js');
    const passport = require('passport');
    require('../config/passport')
;
    
    app.post('/api/postcustomers', user.create);
    app.get('/api/getcustomers', passport.authenticate('jwt', { session: false}), user.findAll);
    app.get('/api/getcustomers/:id',  passport.authenticate('jwt', { session: false}) ,user.findById);
    app.put('/api/updatecustomers/:id', user.update);
    app.delete('/api/deletecustomers/:id', user.delete);
}