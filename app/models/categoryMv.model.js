module.exports = (sequelize, Sequelize) => {
    const CategoryMv = sequelize.define("categoryMv", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      min_price : {
        type: Sequelize.INTEGER,
      },
      max_price : {
        type: Sequelize.INTEGER,
      },
      kat : {
        type: Sequelize.INTEGER,
      },

    });
  
    return CategoryMv;
  };