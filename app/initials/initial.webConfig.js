const db = require("../models");
const WebConfig = db.webConfig;

const initialWebConfig = ()=>{
            WebConfig.create({
                id: "1",
                description: "Link Infinitium",
                item: "payment_infinitum",
                value: "https://cimbniaga.infinitium.com/payment/PaymentWindow.jsp"
            });
            WebConfig.create({
                id: "2",
                description: "Site Description",
                item: "description",
                value: "Asuransi Bintang adalah salah satu Asuransi terbaik di Indonesia"
            });
            WebConfig.create({
                id: "3",
                description: "Site Author",
                item: "author",
                value: "Asuransi Bintang"
            });
            WebConfig.create({
                id: "4",
                description: "Merchant ID",
                item: "merchant_id",
                value: "bintang"
            });
            WebConfig.create({
                id: "5",
                description: "Merchant Password",
                item: "merchant_password",
                value: "egvcc"
            });
            WebConfig.create({
                id: "6",
                description: "Status Online Auto Shield",
                item: "online_autoshiled",
                value: "1"
            });
            WebConfig.create({
                id: "7",
                description: "Status Online Home Protection",
                item: "online_home",
                value: "1"
            });
            WebConfig.create({
                id: "8",
                description: "Status Online PA",
                item: "online_pa",
                value: "1"
            });
            WebConfig.create({
                id: "9",
                description: "Nilai Pertanggungan Minimal",
                item: "minimal_pertanggungan",
                value: "200000000"
            });
            WebConfig.create({
                id: "10",
                description: "Nilai Bangunan Maksimal Tanpa Harus Survey",
                item: "maksimal_tanpa_survey",
                value: "3000000000"
            });
            WebConfig.create({
                id: "11",
                description: "Biaya Admin",
                item: "biaya_admin",
                value: "0"
            });
            WebConfig.create({
                id: "12",
                description: "Biaya Materai Nilai Premi 0 s.d 250.000",
                item: "biaya_materai_0_250",
                value: "10000"
            });
            WebConfig.create({
                id: "13",
                description: "Biaya Materai Nilai Premi 250.000 - 1.000.000",
                item: "biaya_materai_250_1jt",
                value: "20000"
            });
            WebConfig.create({
                id: "14",
                description: "Biaya Materai Nilai Premi Diatas 1.000.000",
                item: "biaya_materai_diatas_1jt",
                value: "20000"
            });
            WebConfig.create({
                id: "15",
                description: "Nilai Maksimal Premi Yang Harus Disurvey",
                item: "maksimal_premi_survey",
                value: "5112000"
            });
            WebConfig.create({
                id: "16",
                description: "Rate Perluasan Banjir (Tanpa Zona)",
                item: "perluasan_banjir_non_zona",
                value: "0.05"
            });
            WebConfig.create({
                id: "17",
                description: "Rate Paket Dasar Home Protection",
                item: "rate_paket_dasar",
                value: "0.0374"
            });
            WebConfig.create({
                id: "18",
                description: "Nilai Maksimal Pertanggungan",
                item: "maksimal_pertanggungan",
                value: "3000000000"
            });
            WebConfig.create({
                id: "19",
                description: "Ipay Link ",
                item: "ipay_post",
                value: "https://payment.ipay88.co.id/epayment/entry.asp",
                temp_1: "https://dev.ecommerce.asuransibintang.com/index.php/test/ipay_dummy",
                temp_2: "https://sandbox.ipay88.co.id/epayment/entry.asp"
            });
            WebConfig.create({
                id: "20",
                description: "Ipay merchant_key",
                item: "ipay_merchant_key",
                value: "p93vhitJkp",
                temp_1: "https://sandbox.ipay88.co.id/epayment/entry.asp"
            });
            WebConfig.create({
                id: "21",
                description: "Ipay merchant_code",
                item: "ipay_merchant_code",
                value: "ID00196"
            });
            WebConfig.create({
                id: "22",
                description: "NextG Policy Method for PA",
                item: "nextg_policy_method_pa",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy.php?method=addPolicy",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "23",
                description: "NextG Response Page PA",
                item: "nextg_response_page_pa",
                value: "https://nextg.asuransibintang.com/nextg_v2/get_policy_ecom.php?trans_id=",
                temp_1: "http://localhost/asuransi_bintang_ecommerce/index.php/test/curl_response"
            });
            WebConfig.create({
                id: "24",
                description: "NextG Policy Method for MV",
                item: "nextg_policy_method_mv",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy.php?method=addPolicyMV",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "25",
                description: "NextG Policy Method for Fire / Home",
                item: "nextg_policy_method_fire",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy.php?method=addPolicyHP",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "26",
                description: "NextG Response Page MV",
                item: "nextg_response_page_mv",
                value: "https://nextg.asuransibintang.com/nextg_v2/get_policy_ecom.php?trans_id="
            });
            WebConfig.create({
                id: "27",
                description: "NextG Response Page Fire",
                item: "nextg_response_page_fire",
                value: "https://nextg.asuransibintang.com/nextg_v2/get_policy_ecom.php?trans_id="
            });
            WebConfig.create({
                id: "28",
                description: "NextG Questioner",
                item: "nextg_response_questioner",
                value: "https://nextg.asuransibintang.com/nextg_v2/getQuestioner.php"
            });
            WebConfig.create({
                id: "29",
                description: "NextG Policy Method for PA DEV",
                item: "nextg_policy_method_pa_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/getPolicy.php?method=addPolicy",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "30",
                description: "NextG Response Page PA DEV",
                item: "nextg_response_page_pa_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/get_policy_ecom.php?trans_id=",
                temp_1: "http://localhost/asuransi_bintang_ecommerce/index.php/test/curl_response"
            });
            WebConfig.create({
                id: "31",
                description: "NextG Policy Method for Fire / Home DEV",
                item: "nextg_policy_method_fire_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/getPolicy.php?method=addPolicyHP",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "32",
                description: "NextG Response Page Fire DEV",
                item: "nextg_response_page_fire_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/get_policy_ecom.php?trans_id="
            });
            WebConfig.create({
                id: "33",
                description: "Nilai Pertanggungan Minimal Mobile Apps",
                item: "minimal_pertanggungan_mobile",
                value: "150000000"
            });
            WebConfig.create({
                id: "34",
                description: "Nilai Maksimal Pertanggungan Mobile Apps",
                item: "maksimal_pertanggungan_mobile",
                value: "3000000000"
            });
            WebConfig.create({
                id: "35",
                description: "Rate Perluasan RSCC",
                item: "perluasan_rscc",
                value: "0.005"
            });
            WebConfig.create({
                id: "36",
                description: "Rate Perluasan TS",
                item: "perluasan_ts",
                value: "0.005"
            });
            WebConfig.create({
                id: "37",
                description: "NextG Policy Method for Fire Flexas/ Home DEV",
                item: "nextg_policy_method_fire_f_dev",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy.php?method=addPolicyHPFlexas",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "38",
                description: "NextG Policy Method for MV DEV",
                item: "nextg_policy_method_mv_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/getPolicy.php?method=addPolicyMV",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "39",
                description: "NextG Response Page MV DEV",
                item: "nextg_response_page_mv_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/get_policy_ecom.php?trans_id="
            });
            WebConfig.create({
                id: "40",
                description: "Biaya Materai Nilai Premi 0 - 5.000.000",
                item: "biaya_materai_0_5jt",
                value: "10000"
            });
            WebConfig.create({
                id: "41",
                description: "Biaya Materai Nilai Premi Diatas 5.000.000",
                item: "biaya_materai_diatas_5jt",
                value: "20000"
            });
            WebConfig.create({
                id: "42",
                description: "Rate Paket Dasar Home Protection Flexas",
                item: "rate_paket_dasar_flexas",
                value: "0.0294"
            });
            WebConfig.create({
                id: "43",
                description: "NextG Policy Method for PA Mobile",
                item: "nextg_policy_method_pa_mobile",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy_mobile.php?method=addPolicy",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "44",
                description: "NextG Response Page PA Mobile",
                item: "nextg_response_page_pa_mobile",
                value: "https://nextg.asuransibintang.com/nextg_v2/get_policy_ecom_mobile.php?trans_id=",
                temp_1: "http://localhost/asuransi_bintang_ecommerce/index.php/test/curl_response"
            });
            WebConfig.create({
                id: "45",
                description: "NextG Policy Method for MV Mobile",
                item: "nextg_policy_method_mv_mobile",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy_mobile.php?method=addPolicyMV",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "46",
                description: "NextG Policy Method for Fire / Home Mobile",
                item: "nextg_policy_method_fire_mobil",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy_mobile.php?method=addPolicyHP",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "47",
                description: "NextG Response Page Fire Mobile",
                item: "nextg_response_page_fire_mobil",
                value: "https://nextg.asuransibintang.com/nextg_v2/get_policy_ecom_mobile.php?trans_id="
            });
            WebConfig.create({
                id: "48",
                description: "NextG Policy Method for Fire Flexas/ Home Mobile",
                item: "nextg_policy_method_fire_f_mob",
                value: "https://nextg.asuransibintang.com/nextg_v2/getPolicy_mobile.php?method=addPolicyHPFlexas",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "49",
                description: "NextG Policy Method for Fire / Home Mobile DEV",
                item: "nextg_policy_method_fire_mob_d",
                value: "https://staging.asuransibintang.com/nextg_v2/getPolicy_mobile.php?method=addPolicyHP",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "50",
                description: "NextG Response Page Fire Mobile DEV",
                item: "nextg_response_page_fire_mob_d",
                value: "https://staging.asuransibintang.com/nextg_v2/get_policy_ecom_mobile.php?trans_id="
            });
            WebConfig.create({
                id: "51",
                description: "NextG Policy Method for Fire / Home Mobile DEV",
                item: "nextg_policy_method_fire_m_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/getPolicy_mobile.php?method=addPolicyHP",
                temp_1: "/test/curl_response"
            });
            WebConfig.create({
                id: "52",
                description: "NextG Response Page Fire Mobile DEV",
                item: "nextg_response_page_fire_m_dev",
                value: "https://staging.asuransibintang.com/nextg_v2/get_policy_ecom_mobile.php?trans_id="
            });
            WebConfig.create({
                id: "53",
                description: "NextG Policy Method for Fire Flexas/ Home Mobile DEV",
                item: "nextg_policy_method_fire_f_m_d",
                value: "https://staging.asuransibintang.com/nextg_v2/getPolicy_mobile.php?method=addPolicyHPFlexas",
                temp_1: "/test/curl_response"
            });
    return;
};

module.exports = initialWebConfig;