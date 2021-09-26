const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const { query,body } = require('express-validator');

const app = express();

const db = require("./app/models");

// set port, listen for requests
const PORT = process.env.PORT || 8182;

var corsOptions = {
  origin: `http://localhost:3000`
};//memberikan izin CORS untuk http://localhost:3000

app.use(cors(corsOptions)); //sudah fixed

// parse requests of content-type - application/json
//app.use(bodyParser.json());
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//const initials = require('./app/initials');



db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync Db');
  // initials.initialRole();
  // initials.initialRateMv();
  // initials.initialPlatWilayah();
  // initials.initialRateMvEcom();
  // initials.initialWebConfig();
  // initials.initialRatePerluasanMvEcom();

});//true
// In development, you may need to drop existing tables and re-sync database. So you can use force: true as code above.
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');//menginzinkan semua browser dr url lain untuk mengakses url kita
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');//menginzinkan semua browser dr url lain untuk menggunakan method di list
//   res.setHeader('Access-Control-Allow-Headers', 'x-access-token, Origin, X-Requested-With, Content-Type, Accept, Authorization');//menginzinkan header dr url lain untuk menggunakan header di list
//   next();
// })
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Bintang Rest API ." });
});
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to Bintang Rest API ." });
});
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/calculator.routes')(app);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
