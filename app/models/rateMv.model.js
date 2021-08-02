module.exports = (sequelize, Sequelize) => {
    const RateMv = sequelize.define("rateMv", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      batas: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.INTEGER,
      },
      vehicle_type: {
        type: Sequelize.STRING,
      },
      coverage: {
        type: Sequelize.STRING,
      },
      guaranty: {
        type: Sequelize.STRING,
      },
      kat1: {
        type: Sequelize.FLOAT,
      },
      kat2: {
        type: Sequelize.FLOAT,
      },
      kat3: {
        type: Sequelize.FLOAT,
      },
      kat4: {
        type: Sequelize.FLOAT,
      },
      kat5: {
        type: Sequelize.FLOAT,
      },
      segmen_bisnis: {
        type: Sequelize.STRING,
      },

    });
  
    return RateMv;
  };