const { authJwt } = require("../middleware");
const controller = require("../controllers/calculator.controller");
const { query,check  } = require('express-validator');
const db = require("../models");
const conn = require("../config/db.config");
const PlatWilayah = db.platWilayah;
const yearNow = new Date().getFullYear();   


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/calculator/test",(req,res)=>{res.send({test:'test ok'})}); 
  app.get("/api/calculator/testing",(req,res)=>{
    db.sequelize.query("SELECT * FROM rateMvs").then(myTableRows => {
      console.log(myTableRows);
      res.send({
        myTableRows
      })
    })
  
  }); 

  app.get("/api/calculator/vehicle", 
                [
                  //authJwt.verifyToken,
                    query('plat')
                        .notEmpty().withMessage('Plat Cannot be empty.')
                        .isString().withMessage('Only letters and digits allowed in plat.')
                        .trim()
                        .isLength({max: 3}).withMessage('PLAT too Long. Enter a short plat!')
                        .custom(value => {
                          return PlatWilayah.findOne({ where: {plat:value,}}).then(checkPlat => {
                            if (!checkPlat) {
                              return Promise.reject('Plat Not found');
                            }
                          });
                        }),
                    query('vehicle_type')
                        .notEmpty().withMessage('Vehicle Type Cannot be empty.')
                        .isNumeric().withMessage('Only numbers allowed in Vehicle Type.')
                        .trim()
                        .isLength({min: 1}).withMessage('Vehicle Type too short. Enter a long Vehicle Type!')
                        .isLength({max: 2}).withMessage('Vehicle Type too long. Enter a short Vehicle Type!'),
                    query('coverage')
                        .notEmpty().withMessage('Coverage Type Cannot be empty.')
                        .isString().withMessage('Only letters and digits allowed in Coverage.')
                        .trim()
                        .isLength({min: 2}).withMessage('Coverage too short. Enter a long Coverage!')
                        .isLength({max: 15}).withMessage('Coverage too long. Enter a short Coverage!'),
                    query('guaranty')
                        .notEmpty().withMessage('Guaranty Cannot be empty.')
                        .isString().withMessage('Only letters and digits allowed in Guaranty.')
                        .trim()
                        .isLength({min: 1}).withMessage('Guaranty too short. Enter a long Guaranty!')
                        .isLength({max: 6}).withMessage('Guaranty too long. Enter a short Guaranty!'),
                    // query('segmen_bisnis')
                    //     .isString().withMessage('Only letters and digits allowed in Segmen Bisnis.')
                    //     .trim(),
                    query('tsi')
                        .notEmpty().withMessage('TSI Cannot be empty.')
                        .isNumeric().withMessage('Only numbers allowed in TSI.')
                        .trim()
                        .custom(minPrice => {
                          if (parseInt(minPrice) < 76000000) {
                              return Promise.reject(`price must be greather than 76000000`);
                            }else{
                              return true;
                            }
                        })
                        .custom(maxPrice => {
                          if (parseInt(maxPrice) > 2000000000) {
                            return Promise.reject('price must be lower than 2000000000');
                          }else{
                            return true;
                          }
                      }),
                ],
                controller.vehicle);


app.get("/api/calculator/vehicle/ecom", 
                [
                  //authJwt.verifyToken,
                    query('plat')
                        .notEmpty().withMessage('Plat Cannot be empty.')
                        .isString().withMessage('Only letters and digits allowed in plat.')
                        .trim()
                        .isLength({max: 3}).withMessage('PLAT too Long. Enter a short plat!')
                        .custom(value => {
                          return PlatWilayah.findOne({ where: {plat:value,}}).then(checkPlat => {
                            if (!checkPlat) {
                              return Promise.reject('Plat Not found');
                            }
                          });
                        }),
                    query('vehicle_type')
                        .notEmpty().withMessage('Vehicle Type Cannot be empty.')
                        .isNumeric().withMessage('Only numbers allowed in Vehicle Type.')
                        .trim()
                        .isLength({min: 1}).withMessage('batas too short. Enter a long Vehicle Type!')
                        .isLength({max: 2}).withMessage('batas too long. Enter a short Vehicle Type!'),
                    query('coverage')
                        .notEmpty().withMessage('Coverage Type Cannot be empty.')
                        .isString().withMessage('Only letters and digits allowed in Coverage.')
                        .trim()
                        .isLength({min: 2}).withMessage('batas too short. Enter a long Vehicle Type!')
                        .isLength({max: 15}).withMessage('batas too long. Enter a short Vehicle Type!'),
                    // query('segmen_bisnis')
                    //     .isString().withMessage('Only letters and digits allowed in Segmen Bisnis.')
                    //     .trim(),
                    query('year')
                    .notEmpty().withMessage('Year Cannot be empty.')
                    .isNumeric().withMessage('Only number allowed in Year.')
                    .trim()
                    .isLength({min: 4}).withMessage('Year too short. Enter a long Year!')
                    .isLength({max: 4}).withMessage('Year too long. Enter a short Year!')
                    .custom(minYear => {
                      if ((parseInt(yearNow) - parseInt(minYear)) > 8) {
                        return Promise.reject(`Year must be greate than ${parseInt(yearNow) - 9}`);
                      }else{
                        return true;
                      }
                  }),
                    query('vehicle_price')
                      .notEmpty().withMessage('Vehicle Price Cannot be empty.')
                      .isNumeric().withMessage('Only numbers allowed in Vehicle Price.')
                      .trim()
                      .custom(minPrice => {
                        if (parseInt(minPrice) < 76000000) {
                            return Promise.reject(`price must be greather than 76000000`);
                          }else{
                            return true;
                          }
                      })
                      .custom(maxPrice => {
                        if (parseInt(maxPrice) > 2000000000) {
                          return Promise.reject('price must be lower than 2000000000');
                        }else{
                          return true;
                        }
                    }),
                  query('component_price')
                      .custom((componentPrice, { req }) => {
                        if (typeof (parseInt(componentPrice))  == 'number' && parseInt(componentPrice) % 1 == 0 ){
                              vPrice = parseInt(req.query.vehicle_price);
                              maxPrice = (vPrice * 10) / 100; //10% dr casco
                              if(componentPrice > maxPrice){
                                return Promise.reject(`Component Price : ${componentPrice} must be lower than ${maxPrice}`);
                              }else{
                                return true;
                              }
                        }else{
                          return Promise.reject('Only numbers allowed in Component Price.');

                        }
                    })
                      .trim(),
                    query('discount')
                    .if(query('discount').exists())
                    .isNumeric().withMessage('Only numbers allowed in Discount')
                      .custom((value, { req }) => {
                        if (parseInt(value)==0 || parseInt(value)> 0 && parseInt(value)<=15){
                          return true;
                        }else{
                          return Promise.reject('Only 0 - 25 is allowed in Discount.');
                        }
                    })
                      .trim(),
                  query('rscc')
                  .if(query('rscc').exists())
                  .isNumeric().withMessage('Only numbers allowed in RSCC')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(value)==1 || parseInt(value)==0){
                      return true;
                    }else{
                      return Promise.reject('Only 0 or 1 is allowed in RSCC.');
                    }
                  }),
                  query('ts')
                  .if((value, { req }) => req.query.ts)
                  .isNumeric().withMessage('Only numbers allowed in TS')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(value)==1 || parseInt(value)==0){
                      if(req.query.rscc ==1){
                        return true;
                      }else{
                        return Promise.reject('RSCC must be included if choosed TS.');
                      }
                    }else{
                      return Promise.reject('Only 0 or 1 is allowed in TS.');
                    }
                  }),
                  query('eqvet')
                  .if((value, { req }) => req.query.eqvet)
                  .isNumeric().withMessage('Only numbers allowed in EQVET')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(value)==1 || parseInt(value)==0){
                      return true;
                    }else{
                      return Promise.reject('Only 0 or 1 is allowed in EQVET.');
                    }
                  }),
                  query('tswd')
                  .if((value, { req }) => req.query.tswd)
                  .isNumeric().withMessage('Only numbers allowed in TSWD')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(value)==1 || parseInt(value)==0){
                        return true;
                    }else{
                      return Promise.reject('Only 0 or 1 is allowed in TSWD.');
                    }
                  }),
                  query('tjh')
                  .if((value, { req }) => req.query.tjh)
                  .isNumeric().withMessage('Only numbers allowed in TJH')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(value) == 0 || parseInt(value) % 5000000 == 0 && parseInt(value)>= 5000000 && parseInt(value) <= 25000000){
                        return true;
                    }else{
                      return Promise.reject('Only 5.000.000, 10.000.000,...25.000.000.000 is allowed in TJH.');
                    }
                  }),
                  query('bengkel')
                  .if((value, { req }) => req.query.bengkel)
                  .isNumeric().withMessage('Only numbers allowed in Bengkel')
                  .trim()
                  .custom((value, { req }) => {
                    if(req.query.coverage.split(" ").join("").toUpperCase() == 'COMPREHENSIVE' || parseInt(value)==0){
                      if (parseInt(value)==1 || parseInt(value)==0){
                          return true;
                      }else{
                        return Promise.reject('Only 0 or 1 is allowed in Bengkel.');
                      }
                    }else{
                      return Promise.reject('Only COMPREHENSIVE allowed in Bengkel.');
                    }
                  }),
                  query('pa_driver')
                  .if((value, { req }) => req.query.pa_driver)
                  .isNumeric().withMessage('Only numbers allowed in PA Driver')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(value) == 0 || parseInt(value) % 5000000 == 0 && parseInt(value)>= 5000000 && parseInt(value) <= 25000000){
                        return true;
                    }else{
                      return Promise.reject('Only 5.000.000, 10.000.000,...25.000.000.000 is allowed in PA Driver.');
                    }
                  }),
                  query('penumpang')
                  .if((value, { req }) => req.query.penumpang)
                  .isNumeric().withMessage('Only numbers allowed in Penumpang')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(req.query.pa_driver) > 0 || parseInt(req.query.pa_driver) == 0 && parseInt(value) == 0){
                      minVal=1;
                      maxVal=9;
                      if (parseInt(value) == 0 || parseInt(value) >=1 && parseInt(value)<= 9){
                          return true;
                      }else{
                        return Promise.reject(`Only ${minVal}-${maxVal} is allowed in Penumpang.`);
                      }
                    }else{
                      return Promise.reject('PA Driver must fill');
                    }
                  }),
                  query('pa_penumpang')
                  .if((value, { req }) => req.query.pa_penumpang)
                  .isNumeric().withMessage('Only numbers allowed in PA Penumpang')
                  .trim()
                  .custom((value, { req }) => {
                    if (parseInt(req.query.pa_driver)  > 0 || parseInt(req.query.pa_driver) == 0 && parseInt(req.query.penumpang) == 0 && parseInt(value) == 0){
                      if (parseInt(req.query.penumpang) == 0 && parseInt(value) == 0 || parseInt(req.query.penumpang) > 0){
                        if (parseInt(value) == 0 || parseInt(value) % 5000000 == 0 && parseInt(value)>= 5000000 && parseInt(value) <= 25000000){
                            return true;
                        }else{
                          return Promise.reject('Only 5.000.000, 10.000.000,...25.000.000.000 is allowed in PA Penumpang.');
                        }
                      }else{
                        return Promise.reject('Penumpang must fill');
                      }
                  }else{
                    return Promise.reject('PA Driver must fill');
                  }
                  }),
                      
                ],
                controller.vehicleEcom);

app.get("/api/calculator/property/ecom", 
                [
                  //authJwt.verifyToken,
                    query('lokasi')
                        .notEmpty().withMessage('Lokasi Cannot be empty.')
                        .isString().withMessage('Only letters and digits allowed in Lokasi.')
                        .trim(),
                    query('rangka')
                        .notEmpty().withMessage('Rangka Type Cannot be empty.')
                        .isString().withMessage('Only numbers allowed in Rangka.')
                        .trim(),
                    query('year')
                    .notEmpty().withMessage('Year Cannot be empty.')
                    .isNumeric().withMessage('Only number allowed in Year.')
                    .trim()
                    .isLength({min: 4}).withMessage('Year too short. Enter a long Year!')
                    .isLength({max: 4}).withMessage('Year too long. Enter a short Year!'),
                  //   .custom(minYear => {
                  //     if ((parseInt(yearNow) - parseInt(minYear)) > 8) {
                  //       return Promise.reject(`Year must be greate than ${parseInt(yearNow) - 9}`);
                  //     }else{
                  //       return true;
                  //     }
                  // }),
                    query('banjir')
                    .notEmpty().withMessage('Banjir Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Banjir.')
                    .trim()
                    .isLength({min: 1}).withMessage('Banjir too short. Enter a long Banjir!')
                    .isLength({max: 1}).withMessage('Banjir too long. Enter a short Banjir!')
                    .custom((value, { req }) => {
                      if(value.split(" ").join("").toUpperCase() == 'N' || value.split(" ").join("").toUpperCase() == 'Y'){
                            return true;
                        }else{
                          return Promise.reject('only y or n allowed in Banjir');
                        }
                    }),
                    query('gempa')
                    .notEmpty().withMessage('Gempa Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Gempa.')
                    .trim()
                    .isLength({min: 1}).withMessage('Gempa too short. Enter a long Gempa!')
                    .isLength({max: 1}).withMessage('Gempa too long. Enter a short Gempa!')
                    .custom((value, { req }) => {
                      if(value.split(" ").join("").toUpperCase() == 'N' || value.split(" ").join("").toUpperCase() == 'Y'){
                            return true;
                        }else{
                          return Promise.reject('only y or n allowed in Gempa');
                        }
                    }),
                    query('dinding')
                    .notEmpty().withMessage('Dinding Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Dinding.'),
                    query('atap')
                    .notEmpty().withMessage('Atap Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Atap.'),
                    query('lingkiri')
                    .notEmpty().withMessage('Lingkiri Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Lingkiri.'),
                    query('lingkanan')
                    .notEmpty().withMessage('Lingkanan Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Lingkanan.'),
                    query('lingdepan')
                    .notEmpty().withMessage('Lingdepan Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Lingdepan.'),
                    query('lingblkg')
                    .notEmpty().withMessage('Lingblkg Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Lingblkg.'),
                    query('statusmilik')
                    .notEmpty().withMessage('Statusmilik Cannot be empty.')
                    .isString().withMessage('Only letters and digits allowed in Statusmilik.'),
                    query('isi_bangunan').toInt()
                        .notEmpty().withMessage('Isi Bangunan Cannot be empty.')
                        .isNumeric().withMessage('Only numbers allowed in Isi Bangunan.')
                        .trim(),
                      query('nilai_bangunan')
                      .notEmpty().withMessage('Nilai Bangunan Cannot be empty.')
                      .isNumeric().withMessage('Only numbers allowed in Nilai Bangunan.')
                      .trim()
                      .custom((maxPrice, { req }) => {
                        tsi = parseInt(maxPrice)+parseInt(req.query.isi_bangunan);
                        if(tsi > 3000000000){
                          return Promise.reject(`TSI : ${tsi} must be lower than 3000000000`);
                        }else{
                          return true;
                        }
                      })
                      .custom(minPrice => {
                        if(minPrice < 200000000){
                          return Promise.reject(`Nilai Bangunan : ${minPrice} minimal  200000000`);
                        }else{
                          return true;
                        }
                      }),
                      query('discount')
                      .if(query('discount').exists())
                      .isNumeric().withMessage('Only numbers allowed in Discount')
                        .custom((value, { req }) => {
                          if (parseInt(value)==0 || parseInt(value)> 0 && parseInt(value)<=15){
                            return true;
                          }else{
                            return Promise.reject('Only 0 - 25 is allowed in Discount.');
                          }
                      })
                        .trim(),
                ],
                controller.propertyEcom);

};
