const db = require('../config/db.config.js');
const Customer = db.users;
const bcrypt = require('bcrypt');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

exports.login = (req, res) => {

    passport.use(new LocalStrategy(
        function(email, password, done) {
            Customer.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
      ));

}

res.json(data);