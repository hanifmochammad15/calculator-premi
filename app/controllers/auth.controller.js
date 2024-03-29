const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");


module.exports = {
    signup: async (req, res) => {
        try {
            user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8)
            });
            if (req.body.roles) {
                roles = await  Role.findAll({where: {name: {[Op.or]: req.body.roles}}});
                await user.setRoles(roles);
                res.send({ message: "User was registered successfully!" });
            }else{
                // user role = 1
                await user.setRoles([1]);
                res.send({ message: "User was registered successfully!" });
            }
        } catch (error) {
          res.status(500).send({ message: error.message });
        }
    },
    signin: async (req, res) => {
        try {
            user = await User.findOne({
                where: {
                  username: req.body.username
                }
              });
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
              }
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
              );          
            
            if (!passwordIsValid) {
                return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
                });
            }
            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
              });
        
            let authorities = [];
            user.getRoles().then(roles => {
                for (let i = 0; i < roles.length; i++) {
                  authorities.push("ROLE_" + roles[i].name.toUpperCase());
                }
                res.status(200).send({
                  id: user.id,
                  username: user.username,
                  email: user.email,
                  roles: authorities,
                  accessToken: token
                });
              });

        } catch (error) {
          res.status(500).send({ message: error.message });
        }
    },
}

// exports.signup = (req, res) => {
//   // Save User to Database
//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 8)
//   })
//     .then(user => {
//       if (req.body.roles) {
//         Role.findAll({
//           where: {
//             name: {
//               [Op.or]: req.body.roles
//             }
//           }

//         }).then(roles => {
//             console.log('hanif123'+user);
//           user.setRoles(roles).then(() => {
//             res.send({ message: "User was registered successfully!" });
//           });
//         });
//       } else {
//         // user role = 1
//         user.setRoles([1]).then(() => {
//           res.send({ message: "User was registered successfully!" });
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };

// exports.signin = (req, res) => {
//   User.findOne({
//     where: {
//       username: req.body.username
//     }
//   })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }

//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!"
//         });
//       }

//       var token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400 // 24 hours
//       });

//       var authorities = [];
//       user.getRoles().then(roles => {
//         for (let i = 0; i < roles.length; i++) {
//           authorities.push("ROLE_" + roles[i].name.toUpperCase());
//         }
//         res.status(200).send({
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           roles: authorities,
//           accessToken: token
//         });
//       });
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };
