const db = require("../models");
//const conn = require("../config/db.config");
const PlatWilayah = db.platWilayah;
const RateMv = db.rateMv;
const RateMvEcom = db.rateMvEcom;
const RatePerluasanMvEcom = db.ratePerluasanMvEcom;
const WebConfig = db.webConfig;
const {validationResult } = require('express-validator');
const myValidationResult = validationResult.withDefaults({
    formatter: error => {
      return {
        value: error.value,
        message: error.msg,
        param: error.param,
        location: error.location,

      };
    },
  });
const Op = db.Sequelize.Op;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
const { webConfig } = require("../models");

const  getCategoryMv = (price)=>{
    return new Promise((resolve, reject)=>{

        if ( price <= 125000000 ){
            cat = 1;
        } else if (price > 125000000 && price <= 200000000  ){
            cat = 2;
        } else if (price > 200000000  && price <= 400000000 ){
            cat = 3;
        } else if (price > 400000000 && price <= 800000000  ){
            cat = 4;
        } else if (price > 800000000  && price <= 20000000000  ){
            cat = 5;
        } else {
            cat = 0;
        }
        if(cat > 0){
            resolve(cat);
        }else{
            reject({message:'category error'});
        }
    });
}

const getMaterai  = (netPre)=>{
return new Promise((resolve, reject)=>{
    if (netPre <= 5000000 ){
        WebConfig.findOne({ where: {item:'biaya_materai_0_5jt'},attributes: ['value']})
        .then(getMterai => {
        resolve(parseInt(getMterai.value));
    });
    }else if (netPre > 5000000 ){
        WebConfig.findOne({ where: {item:'biaya_materai_diatas_5jt'},attributes: ['value']})
        .then(getMterai => {
        resolve(parseInt(getMterai.value));
    });
    }else{
        reject({message:'materai error'});
    }

 });
}

const perluasan_rscc = (jenis_pertanggungan)=>{
    return new Promise(resolve=>{
                RatePerluasanMvEcom.findOne({ where: {
                    id_pertanggungan:jenis_pertanggungan,
                    id_vehicle_perluasan : 1,
                },attributes: ['tarif']})
                .then(getData => {
                    resolve(parseFloat(getData.tarif));
                });
    });
    }

const perluasan_ts = (jenis_pertanggungan)=>{
    return new Promise(resolve=>{
                RatePerluasanMvEcom.findOne({ where: {
                    id_pertanggungan:jenis_pertanggungan,
                    id_vehicle_perluasan : 2,
                },attributes: ['tarif']})
                .then(getData => {
                    resolve(parseFloat(getData.tarif));
                });
    });
    }
const perluasan_eqvet =  (jenis_pertanggungan,plat)=>{
    return new Promise((resolve,reject)=>{
    PlatWilayah.findOne({ where: {plat:plat}, attributes: ['area']})
    .then(getWilayah =>{
        if(parseInt(getWilayah.area) > 0){
                RatePerluasanMvEcom.findOne({ where: {
                    id_pertanggungan:jenis_pertanggungan,
                    id_wilayah : getWilayah.area,
                    id_vehicle_perluasan : 3,
                },attributes: ['tarif']})
                .then(getData => {
                    if(parseFloat(getData.tarif) > 0){
                            resolve(parseFloat(getData.tarif));
                    }else{
                        resolve(0);
                    }
                });
        }else{
            reject({message:'eqvet error plat number not found'});
        }
    });
    });
}

const perluasan_tswd =  (jenis_pertanggungan,plat)=>{
    return new Promise((resolve,reject)=>{
    PlatWilayah.findOne({ where: {plat:plat}, attributes: ['area']})
    .then(getWilayah =>{
        if(parseInt(getWilayah.area) > 0){
                RatePerluasanMvEcom.findOne({ where: {
                    id_pertanggungan:jenis_pertanggungan,
                    id_wilayah : getWilayah.area,
                    id_vehicle_perluasan : 8,
                },attributes: ['tarif']})
                .then(getData => {
                    if(parseFloat(getData.tarif) > 0){
                            resolve(parseFloat(getData.tarif));
                    }else{
                        resolve(0);
                    }
                });
        }else{
            reject({message:'eqvet error plat number not found'});
        }
        });
    });
}

const perluasan_tjh = ()=>{
    return new Promise(resolve=>{
                RatePerluasanMvEcom.findOne({ where: {
                    id_vehicle_perluasan : 4,
                },attributes: ['tarif']})
                .then(getData => {
                    resolve(parseFloat(getData.tarif));
                });
    });
    }

const perluasan_bengkel = (jenis_pertanggungan,id_kategori)=>{
    return new Promise(resolve=>{
                RatePerluasanMvEcom.findOne({ where: {
                    id_pertanggungan:jenis_pertanggungan,
                    id_vehicle_perluasan : 5,
                    id_kategori_pertanggungan : id_kategori,
                },attributes: ['tarif']})
                .then(getData => {
                    resolve(parseFloat(getData.tarif));
                });
    });
    }
const perluasan_pa_driver = ()=>{
    return new Promise(resolve=>{
                RatePerluasanMvEcom.findOne({ where: {
                    id_vehicle_perluasan : 6,
                },attributes: ['tarif']})
                .then(getData => {
                    resolve(parseFloat(getData.tarif));
                });
    });
    }
const perluasan_pa_penumpang = ()=>{
    return new Promise(resolve=>{
                RatePerluasanMvEcom.findOne({ where: {
                    id_vehicle_perluasan : 7,
                },attributes: ['tarif']})
                .then(getData => {
                    resolve(parseFloat(getData.tarif));
                });
    });
    }
module.exports = {
    vehicle: async (req, res,next) => {
        try {
            const error = myValidationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).send({ error: error.array() });
            }
            let plat = req.query.plat;
            let batas =  "";
            let vehicle_type = req.query.vehicle_type;
            let coverage = req.query.coverage;
            let guaranty = req.query.guaranty;
            let segmen_bisnis = "";
            let tsi = req.query.tsi;
            let category = "";
            let id_kategori =0;
            let rate = 1;
            let tenor = 1;
            let materai = 10000;
            let netPremi = 0;
            let discount = 0;
            let total = 0;
            let data = {};
            
            plat =  plat.split(" ").join("").toUpperCase();
            batas =  batas.split(" ").join("").toLowerCase();
            vehicle_type =  vehicle_type.split(" ").join("");
            coverage =  coverage.split(" ").join("").toUpperCase();
            guaranty =  guaranty.split(" ").join("").toUpperCase();
            //segmen_bisnis =  segmen_bisnis.split(" ").join("").toLowerCase();
            tsi =  parseInt(tsi.split(" ").join(""));
            if(req.query.segmen_bisnis){
                segmen_bisnis = req.query.segmen_bisnis;
            }
            if(req.query.tenor){
                tenor = req.query.tenor;
            }
            if(req.query.discount){
                discount = req.query.discount;
            }
            if(coverage == "COMPREHENSIVE"){
                if(segmen_bisnis=='general'){
                    batas = 'atas';
                }else{
                    batas = 'bawah';
                }
            }else if (coverage == "TLO") {
                batas= 'atas';
            }

            id_kategori = await getCategoryMv(tsi); 
            category = 'kat'+id_kategori;

            PlatWilayah.hasMany(RateMv, {foreignKey: 'area',sourceKey: 'area'});
            //RateMv.belongsTo(PlatWilayah, {foreignKey: 'area',targetKey: 'area'});
            //RateMv.hasOne(PlatWilayah, {foreignKey: 'area',sourceKey: 'area'});

            getRate = await PlatWilayah.findAll({ where: {plat:plat,}, 
                include: [{
                    model : RateMv,
                    where :{
                        batas : batas,
                        vehicle_type : vehicle_type,
                        coverage : coverage,
                        guaranty : guaranty,
                    },
                    attributes: [category]
                }]
            });
            if(getRate.length < 1){
                return res.status(422).send({ error: 'result tidak ditemukan' });
            }
            console.log(getRate);
            rate = getRate[0].rateMvs[0][category];
            //console.log(rate);
            premi = (tsi * (rate/100) ) * tenor;
            premi = Math.round(premi);
            discount = premi * (discount/100);
            discount = Math.round(discount);
            netPremi = premi - discount;
            materai = await getMaterai (netPremi);

            total = netPremi + materai;
            
            //console.log(premi);
            data = {
                rate : rate,
                tsi : tsi,
                premi : premi,
                discount : discount,
                materai : materai,
                total : total

            }
            console.log(data);
            res.status(200).send(data);
            next();

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    vehicleEcom: async (req, res,next) => {
        try {
            const error = myValidationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).send({ error: error.array() });
            }
            let vehicle_price = parseInt(req.query.vehicle_price);
            let plat = req.query.plat;
            let component_price = parseInt(req.query.component_price) || 0;
            let id_kategori =  0;
            let vehicle_type = req.query.vehicle_type;
            let coverage = req.query.coverage;
            let jenis_pertanggungan = 0;
            let tsi = vehicle_price + component_price;
            let rate = 1;
            let tenor = req.query.tenor || 1;
            let admin = 0;
            let materai = 0;
            let usia_kendaraan = 1;
            let yearNow = new Date().getFullYear();   
            let netPremi = 0;
            let discount = req.query.discount || 0;
            let tahunPembuatan = 0;
            let total = 0;
            let data = {};

            //perluasan

            let rscc = parseInt(req.query.rscc) || 0;
            let rate_rscc = 0;
			let ts = parseInt(req.query.ts) || 0;
            let rate_ts = 0;
			let eqvet = parseInt(req.query.eqvet) || 0;
            let rate_eqvet = 0;
			let tswd = parseInt(req.query.tswd) || 0;
            let rate_tswd = 0;
			let tjh = parseInt(req.query.tjh) || 0;
            let rate_tjh = 0;
            let bengkel = parseInt(req.query.bengkel) || 0;
            let rate_bengkel = 0;
			let pa_driver = parseInt(req.query.pa_driver) || 0;
            let rate_pa_driver = 0;
            let penumpang = parseInt(req.query.penumpang) || 0;
			let pa_penumpang = parseInt(req.query.pa_penumpang) || 0;
            let rate_pa_penumpang  = 0;

            
            plat =  plat.split(" ").join("").toUpperCase();
            vehicle_type =  vehicle_type.split(" ").join("");
            coverage =  coverage.split(" ").join("").toUpperCase();
            //segmen_bisnis =  segmen_bisnis.split(" ").join("").toLowerCase();
            //tsi =  parseInt(tsi.split(" ").join(""));

            if(req.query.year){
                tahunPembuatan = req.query.year;
                usia_kendaraan = yearNow - tahunPembuatan ;
            }

            if(coverage == "COMPREHENSIVE"){
                jenis_pertanggungan = 2;
            }else if (coverage == "TLO") {
                jenis_pertanggungan = 1;
            }

            id_kategori = await getCategoryMv(vehicle_price); 

            if (usia_kendaraan <= 5) {
                usia_kendaraan = 5;
            }
			if (usia_kendaraan > 8) {
                usia_kendaraan = 8;
            }

            PlatWilayah.hasMany(RateMvEcom, {sourceKey: 'area',foreignKey: 'id_wilayah'});
            //RateMv.belongsTo(PlatWilayah, {foreignKey: 'area',targetKey: 'area'});
            //RateMv.hasOne(PlatWilayah, {foreignKey: 'area',sourceKey: 'area'});
            //console.log('hanif '+id_kategori);
            if (coverage == "COMPREHENSIVE"){
                getRate = await PlatWilayah.findAll({ where: {plat:plat,}, 
                    include: [{
                        model : RateMvEcom,
                        where :{
                            id_pertanggungan : jenis_pertanggungan,
                            id_kategori_pertanggungan : id_kategori,
                            usia_kendaraan : usia_kendaraan,
                        },
                        attributes: ['tarif']
                    }]
                });
            }else{
                getRate = await PlatWilayah.findAll({ where: {plat:plat,}, 
                    include: [{
                        model : RateMvEcom,
                        where :{
                            id_pertanggungan : jenis_pertanggungan,
                            id_kategori_pertanggungan : id_kategori,
                        },
                        attributes: ['tarif']
                    }]
                });
            }
            if(getRate.length < 1){
                return res.status(422).send({ error: 'result tidak ditemukan' });
            }
            //console.log(getRate);
            rate = getRate[0].rateMvEcoms[0]['tarif'];
            premi = Math.round(((tsi * (rate/100) ) * tenor));
            total = (premi);

            //get Perluasan
            if(rscc == 1){
                rate_rscc = await perluasan_rscc (jenis_pertanggungan);
                temp_rscc = ((rate_rscc/100) * vehicle_price) +  ((rate_rscc/100) * component_price);
                rscc = temp_rscc;
                total += rscc;
            }
            if(ts == 1){
                rate_ts = await perluasan_ts (jenis_pertanggungan);
                temp_ts = ((rate_ts/100) * vehicle_price) +  ((rate_ts/100) * component_price);
                ts = temp_ts;
                total += ts;
            }//Terorist and Sabotage
            if(eqvet == 1){
                rate_eqvet = await perluasan_eqvet (jenis_pertanggungan,plat);
                temp_eqvet = ((rate_eqvet/100) * vehicle_price) +  ((rate_eqvet/100) * component_price);
                eqvet = temp_eqvet;
                total += eqvet;
            }//Gempa Bumi
            if(tswd == 1){
                rate_tswd = await perluasan_tswd (jenis_pertanggungan,plat);
                temp_tswd = ((rate_tswd/100) * vehicle_price) +  ((rate_tswd/100) * component_price);
                tswd = temp_tswd;
                total += tswd;
            }//Banjir
            if(tjh > 0){
                rate_tjh = await perluasan_tjh ();
                temp_tjh = ((rate_tjh/100) * tjh) ;
                tjh = temp_tjh;
                total += tjh;
            }//TJH
            if (bengkel == 1) {
                rate_bengkel = await perluasan_bengkel (jenis_pertanggungan,id_kategori);
                temp_bengkel = ((rate_bengkel/100) * vehicle_price) +  ((rate_bengkel/100) * component_price);
                bengkel = temp_bengkel;
                total += bengkel;
				};
            if(pa_driver > 0){
                rate_pa_driver = await perluasan_pa_driver ();
                temp_pa_driver = ((rate_pa_driver/100) * pa_driver) ;
                pa_driver = temp_pa_driver;
                total += pa_driver;
            }//PA_DRIVER
            if(pa_penumpang > 0){
                rate_pa_penumpang = await perluasan_pa_penumpang ();
                temp_pa_penumpang = ((rate_pa_penumpang/100) * pa_penumpang * penumpang) ;
                pa_penumpang = temp_pa_penumpang;
                total += pa_penumpang;
            }//PA_DRIVER
           // console.log(materai);

            discount = total * (discount/100);
            discount = Math.round(discount);
            netPremi = total - discount;
            materai = await getMaterai (netPremi);
            total = netPremi + materai + admin;

            data = {
                tsi : tsi,
                rate : rate,
                premi : premi,
                rscc : rscc,
                rate_rscc : rate_rscc,
                ts : ts,
                rate_ts : rate_ts,
                eqvet : eqvet,
                rate_eqvet : rate_eqvet,
                tswd : tswd,
                rate_tswd : rate_tswd,
                tjh : tjh,
                rate_tjh : rate_tjh,
                bengkel : bengkel,
                rate_bengkel : rate_bengkel,
                pa_driver : pa_driver,
                rate_pa_driver : rate_pa_driver,
                penumpang : penumpang,
                pa_penumpang : pa_penumpang,
                rate_pa_penumpang : rate_pa_penumpang,
                discount : discount,
                materai : materai,
                admin : admin,
                total : total

            }
            console.log(data);
            res.status(200).send(data);
            next();

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    },
    propertyEcom: async (req, res,next) => {
        try {
            const error = myValidationResult(req);
            if (!error.isEmpty()) {
                return res.status(422).send({ error: error.array() });
            }
            let lokasi = req.query.lokasi;
            let rangka = req.query.rangka;
            let nilaiBangunan = parseInt(req.query.nilai_bangunan) || 0;
            let isiBangunan = parseInt(req.query.isi_bangunan) || 0;;
            let tsi = 0;
            let banjir = req.query.banjir.split(" ").join("").toLowerCase();
            let rate_banjir = 0.05; //jakarta,banten jabar diluar itu 0.045 %
            let premi_banjir = 0;
            let gempa = req.query.gempa.split(" ").join("").toLowerCase();
            let rate_gempa = 0; //gempa belum fix
            let premi_gempa = 0;
            let dinding = req.query.dinding.toLowerCase();
            let atap = req.query.atap.toLowerCase();
            let lingkiri = req.query.lingkiri.toLowerCase();
            let lingkanan = req.query.lingkanan.toLowerCase();
            let lingdepan = req.query.lingdepan.toLowerCase();
            let lingblkg = req.query.lingblkg.toLowerCase();
            let statusmilik = req.query.statusmilik.toUpperCase();
            let rate = 1;
            let tenor =  req.query.tenor || 1;
            let materai = 0 ;
            let admin = 0;
            let yearNow = new Date().getFullYear();   
            let netPremi = 0;
            let discount = req.query.discount || 0;
            let tahunPembuatan = 0;
            let total = 0;
            let data = {};
            let flagSurvey = [];

            if(req.query.year){
                tahunPembuatan = req.query.year;
                usia_bangunan = yearNow - tahunPembuatan ;
            }

            tsi =  nilaiBangunan + isiBangunan;
            console.log(flagSurvey);
            if (lokasi != 'perumahan') {
                flagSurvey.push( {
                    code : 'nonperumahan',
                    message : "lokasi tidak didalam perumahan"
                });
            }	
            if (banjir == 'y') {
                flagSurvey.push( {
                    code : 'banjir',
                    message : "lokasi kawasan banjir"
                });
            }
            if (gempa == 'y') {
                flagSurvey.push ({
                    code : 'gempa',
                    message : "lokasi  gempa"
                });
            }
            if (rangka == 'lain') {
                flagSurvey.push( {
                code : 'rangka',
                message : "rangka bukan beton atau besi baja"
                });
            }
            if (dinding == 'lain') {
                flagSurvey.push( {
                    code : 'dinding',
                    message : "dinding bukan tembok"
                    });
                }
            if (atap == 'lain')  {
                flagSurvey.push( {
                    code : 'atap',
                    message : "atap bukan genteng, beton atau seng"
                    });
                } 
            if (lingkiri == 'lain') {
                flagSurvey.push( {
                    code : 'lingkiri',
                    message : "lingkungan kiri lainnya"
                    });
                } 
            if (lingkanan == 'lain') {
                flagSurvey.push( {
                    code : 'lingkanan',
                    message : "lingkungan kana lainnya"
                    });
                } 
            if (lingdepan == 'lain') {
                flagSurvey.push( {
                    code : 'lingdepan',
                    message : "lingkungan depan lainnya"
                    });
            }
            if (lingblkg == 'lain') { 
                flagSurvey.push( {
                    code : 'lingblkg',
                    message : "lingkungan belakang lainnya"
                    });
            }
            if (statusmilik == 'SW') { 
                flagSurvey.push( {
                    code : 'statusmilik',
                    message : "Status milik bangunan bukan milik sendiri"
                    });
            }

            // console.log(flagSurvey);
            getRate = await WebConfig.findOne({ where: {item:'rate_paket_dasar'},attributes: ['value']})
            if(getRate.length < 1){
                return res.status(422).send({ error: 'result tidak ditemukan' });
            }
            console.log(getRate);

            rate =  parseFloat(getRate.value);
            console.log('rate123-'+rate);
            premi =  Math.round((tsi * (rate/100) ) * tenor);
            total = premi;
            if (banjir == 'y') {
                premi_banjir = tsi * (rate_banjir/100);
            }
            if (gempa == 'y') {
                premi_gempa = tsi * (rate_gempa/100);
            }
            total += premi_banjir;// harus di cek lg di tambah rate dlu atau di diskon terlbih dahulu
            total += premi_gempa;// harus di cek lg di tambah rate dlu atau di diskon terlbih dahulu
            discount = total * (discount/100);
            discount = Math.round(discount);
            netPremi = total - discount;
            materai = await getMaterai (netPremi);
            total = netPremi + materai + admin;

           // console.log(materai);
            data = {
                tsi : tsi,
                rate : rate,
                rate_banjir : rate_banjir,
                premi_banjir : premi_banjir,
                rate_gempa : rate_gempa,
                premi_gempa : premi_gempa,
                premi : premi,
                admin : admin,
                discount : discount,
                materai : materai,
                total : total,
                flagSurvey : flagSurvey

            }
            //console.log(data);
            res.status(200).send(data);
            next();

        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    }
};