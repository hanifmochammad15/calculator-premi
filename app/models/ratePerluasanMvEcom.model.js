module.exports = (sequelize, Sequelize) => {
    const RatePerluasanMvEcom = sequelize.define("ratePerluasanMvEcom", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    perluasan: {
        type: Sequelize.INTEGER
    },
    id_pertanggungan: {
        type: Sequelize.INTEGER
    },
    id_wilayah: {
        type: Sequelize.INTEGER
    },
    id_vehicle_perluasan: {
        type: Sequelize.INTEGER
    },
    tarif: {
        type: Sequelize.FLOAT
    },
    limit: {
        type: Sequelize.INTEGER
    },
    tarif_wilayah_2: {
        type: Sequelize.FLOAT
    },
    tarif_wilayah_3: {
        type: Sequelize.FLOAT
    }, 
    id_kategori_pertanggungan: {
        type: Sequelize.INTEGER
    },

    });
    return RatePerluasanMvEcom;
};

