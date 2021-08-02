const RateMv = require("./initial.rateMv");
const Role = require("./initial.role");
const PlatWilayah = require("./initial.platWilayah");
const RateMvEcom = require("./initial.rateMvEcom");
const WebConfig = require("./initial.webConfig");
const RatePerluasanMvEcom = require("./initial.ratePerluasanMvEcom");

const initials ={
    initialRole : Role,
    initialRateMv : RateMv,
    initialPlatWilayah : PlatWilayah,
    initialRateMvEcom : RateMvEcom,
    initialWebConfig : WebConfig,
    initialRatePerluasanMvEcom : RatePerluasanMvEcom,

}
module.exports =  initials;


