module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "testdb",
    dialect: "mysql",
    PORT: "3306",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
      evict: 1000,
    }
  };

//   module.exports = {
//   //HOST: "localhost",
//   HOST: "10.11.12.217",
//   USER: "hanif",
//   PASSWORD: "P@ssword123!13Rtvbsasd",
//   DB: "db_hnf_ecom",
//   dialect: "mysql",
//   PORT: "3306",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//     evict: 1000,
//   }
// };