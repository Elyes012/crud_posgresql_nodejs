const bodyparser = require("body-parser");
const express = require('express');
const app = express();
const port = 8020;

/*  delete data from database start server
const db = require('./apps/config/db.config.js');
db.sequelize.sync({force: true}).then(()=> {
    console.log('Drop and Resync with { force: true }');
})*/

app.use(bodyparser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST'); 
  next();
});

require('./apps/routes/customer.route.js')(app);

app.listen(port, err=>{
    if (err) throw err;
    console.log(`the server is running on port ${port}`)
  });