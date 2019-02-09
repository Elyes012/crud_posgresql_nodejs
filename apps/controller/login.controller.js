const db = require('../config/db.config.js');
const Customer = db.users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
 


  
  exports.login = (req, res) => {
  
  Customer.findOne({
      where: {
        email: req.body.email
      }
    })
    .then(user => {
      if (user != null) {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (err) {
            return res.status(401).json({
              status: 401,
              failed: 'Accès non autorisé'
            });
          }
          if (result) {
          /*  console.log('resulttt', user.id);
            res.cookie('user_id', user.id, {
              httpOnly: true,
              secure: true,
              signed: true,
        
            });*/
            return res.status(200).json({
              status: 200,
              success: 'Authentification réussie',
              userToken :  jwt.sign({data:user.email},'tasmanianDevils')
            });

          }
          return res.status(401).json({
            status: 401,
            failed: 'Identifiant ou mot de passe est incorecte'
          });
        });
      } else {
        return res.status(404).json({
          status: 404,
          failed: "Utilisateur n'existe pas"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
};