const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    //operatorsAliases: false, //This is not an error, it's simply a warning stating that passing boolean values to operatorsAliases in sequelize options will be deprecated in v5. To remove the warning, replace the boolean value by '1' or '0' for true and false respectively
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.rateMv = require("../models/rateMv.model.js")(sequelize, Sequelize);
db.rateMvEcom = require("../models/rateMvEcom.model.js")(sequelize, Sequelize);
db.platWilayah = require("../models/platWilayah.model.js")(sequelize, Sequelize);
db.webConfig = require("./webConfig.model.js")(sequelize, Sequelize);
db.categoryMv = require("../models/categoryMv.model.js")(sequelize, Sequelize);
db.ratePerluasanMvEcom = require("../models/ratePerluasanMvEcom.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
