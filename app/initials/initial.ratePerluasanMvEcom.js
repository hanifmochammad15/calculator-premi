const db = require("../models");
const RatePerluasanMvEcom = db.ratePerluasanMvEcom;


const initialRatePerluasanMvEcom = ()=> {
    
            RatePerluasanMvEcom.create({
                id: "1",
                id_pertanggungan: "1",
                id_vehicle_perluasan: "1",
                tarif: "0.035"
             });
            RatePerluasanMvEcom.create({
                id: "2",
                id_pertanggungan: "2",
                id_vehicle_perluasan: "1",
                tarif: "0.05"
             });
            RatePerluasanMvEcom.create({
                id: "4",
                id_pertanggungan: "1",
                id_vehicle_perluasan: "2",
                tarif: "0.035"
             });
            RatePerluasanMvEcom.create({
                id: "7",
                id_pertanggungan: "1",
                id_wilayah: "1",
                id_vehicle_perluasan: "3",
                tarif: "0.085"
             });
            RatePerluasanMvEcom.create({
                id: "8",
                id_pertanggungan: "1",
                id_wilayah: "2",
                id_vehicle_perluasan: "3",
                tarif: "0.075"
             });
            RatePerluasanMvEcom.create({
                id: "9",
                id_pertanggungan: "1",
                id_wilayah: "3",
                id_vehicle_perluasan: "3",
                tarif: "0.05"
             });
            RatePerluasanMvEcom.create({
                id: "10",
                id_pertanggungan: "1",
                id_vehicle_perluasan: "4",
                tarif: "1",
                limit: "10000000"
             });
            RatePerluasanMvEcom.create({
                id: "11",
                id_pertanggungan: "2",
                id_vehicle_perluasan: "4",
                tarif: "1",
                limit: "10000000"
             });
            RatePerluasanMvEcom.create({
                id: "13",
                id_pertanggungan: "1",
                id_vehicle_perluasan: "5",
                tarif: "0.15"
             });
            RatePerluasanMvEcom.create({
                id: "14",
                id_pertanggungan: "2",
                id_vehicle_perluasan: "5",
                tarif: "0.15"
             });
            RatePerluasanMvEcom.create({
                id: "16",
                id_wilayah: "1",
                id_vehicle_perluasan: "6",
                tarif: "0.5",
                limit: "5000000"
             });
            RatePerluasanMvEcom.create({
                id: "19",
                id_wilayah: "1",
                id_vehicle_perluasan: "7",
                tarif: "0.1",
                limit: "5000000"
             });
            RatePerluasanMvEcom.create({
                id: "25",
                id_pertanggungan: "2",
                id_wilayah: "0",
                id_vehicle_perluasan: "2",
                tarif: "0.05"
             });
            RatePerluasanMvEcom.create({
                id: "28",
                id_pertanggungan: "2",
                id_wilayah: "1",
                id_vehicle_perluasan: "3",
                tarif: "0.12"
             });
            RatePerluasanMvEcom.create({
                id: "29",
                id_pertanggungan: "2",
                id_wilayah: "2",
                id_vehicle_perluasan: "3",
                tarif: "0.1"
             });
            RatePerluasanMvEcom.create({
                id: "30",
                id_pertanggungan: "2",
                id_wilayah: "3",
                id_vehicle_perluasan: "3",
                tarif: "0.075"
             });
            RatePerluasanMvEcom.create({
                id: "43",
                id_pertanggungan: "1",
                id_wilayah: "1",
                id_vehicle_perluasan: "8",
                tarif: "0.05"
             });
            RatePerluasanMvEcom.create({
                id: "44",
                id_pertanggungan: "1",
                id_wilayah: "2",
                id_vehicle_perluasan: "8",
                tarif: "0.075"
             });
            RatePerluasanMvEcom.create({
                id: "45",
                id_pertanggungan: "1",
                id_wilayah: "3",
                id_vehicle_perluasan: "8",
                tarif: "0.05"
             });
            RatePerluasanMvEcom.create({
                id: "46",
                id_pertanggungan: "2",
                id_wilayah: "1",
                id_vehicle_perluasan: "8",
                tarif: "0.075"
             });
            RatePerluasanMvEcom.create({
                id: "47",
                id_pertanggungan: "2",
                id_wilayah: "2",
                id_vehicle_perluasan: "8",
                tarif: "0.1"
             });
            RatePerluasanMvEcom.create({
                id: "48",
                id_pertanggungan: "2",
                id_wilayah: "3",
                id_vehicle_perluasan: "8",
                tarif: "0.075"
             });
            RatePerluasanMvEcom.create({
                id: "49",
                id_pertanggungan: "2",
                id_vehicle_perluasan: "5",
                tarif: "0.27",
                id_kategori_pertanggungan: "3"
             });
            RatePerluasanMvEcom.create({
                id: "50",
                id_pertanggungan: "2",
                id_vehicle_perluasan: "5",
                tarif: "0.25",
                id_kategori_pertanggungan: "4"
             });
            RatePerluasanMvEcom.create({
                id: "51",
                id_pertanggungan: "2",
                id_vehicle_perluasan: "5",
                tarif: "0.25",
                id_kategori_pertanggungan: "5"
            });
    return;
};

module.exports = initialRatePerluasanMvEcom;