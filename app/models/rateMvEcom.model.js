module.exports = (sequelize, Sequelize) => {
    const RateMvEcom = sequelize.define("rateMvEcom", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_pertanggungan: {
        type: Sequelize.INTEGER
    },
    id_kategori_pertanggungan: {
        type: Sequelize.INTEGER
    },
    usia_kendaraan: {
        type: Sequelize.INTEGER
    },
    id_wilayah: {
        type: Sequelize.INTEGER
    },
    tarif: {
        type: Sequelize.FLOAT
    },

    });
    return RateMvEcom;
};

