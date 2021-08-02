module.exports = (sequelize, Sequelize) => {
    const Platwilayah = sequelize.define("platWilayah", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
        plat: {
        type: Sequelize.STRING
    },
    wilayah: {
        type: Sequelize.STRING
    },
    area: {
        type: Sequelize.INTEGER
    }
    });
    return Platwilayah;
};

