module.exports = (sequelize, Sequelize) => {
    const WebConfig = sequelize.define("webConfig", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      description : {
        type: Sequelize.STRING,
      },
      item : {
        type: Sequelize.STRING,
      },
      value : {
        type: Sequelize.STRING,
      },
      temp_1: {
        type: Sequelize.STRING,
      },
      temp_2: {
        type: Sequelize.STRING,
      },

    });
  
    return WebConfig;
  };