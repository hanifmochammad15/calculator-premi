const db = require("../models");
const RateMv = db.rateMv;

const initialRateMv = ()=>{

    RateMv.create({
        id: "1",
        area: "2",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "TSFWD",
        kat1: "0.075",
        kat2: "0.075",
        kat3: "0.075",
        kat4: "0.075",
        kat5: "0.075"
    });
    RateMv.create({
        id: "2",
        batas: "atas",
        area: "1",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "CASCO",
        kat1: "1.07",
        kat2: "1.07",
        kat3: "1.07",
        kat4: "1.07",
        kat5: "1.07"
    });
    RateMv.create({
        id: "3",
        batas: "atas",
        area: "2",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "CASCO",
        kat1: "2.02",
        kat2: "2.02",
        kat3: "2.02",
        kat4: "2.02",
        kat5: "2.02"
    });
    RateMv.create({
        id: "4",
        batas: "atas",
        area: "3",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "CASCO",
        kat1: "0.98",
        kat2: "0.98",
        kat3: "0.98",
        kat4: "0.98",
        kat5: "0.98"
    });
    RateMv.create({
        id: "5",
        batas: "bawah",
        area: "1",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "CASCO",
        kat1: "3.82",
        kat2: "2.67",
        kat3: "2.18",
        kat4: "1.2",
        kat5: "1.05",
        segmen_bisnis: "corporate"
    });
    RateMv.create({
        id: "6",
        batas: "bawah",
        area: "2",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "CASCO",
        kat1: "3.26",
        kat2: "2.47",
        kat3: "2.08",
        kat4: "1.2",
        kat5: "1.05",
        segmen_bisnis: "corporate"
    });
    RateMv.create({
        id: "7",
        batas: "bawah",
        area: "3",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "CASCO",
        kat1: "2.53",
        kat2: "2.69",
        kat3: "1.79",
        kat4: "1.14",
        kat5: "1.05",
        segmen_bisnis: "corporate"
    });
    RateMv.create({
        id: "8",
        batas: "atas",
        area: "1",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "CASCO",
        kat1: "4.2",
        kat2: "2.94",
        kat3: "2.4",
        kat4: "1.32",
        kat5: "1.16",
        segmen_bisnis: "general"
    });
    RateMv.create({
        id: "9",
        batas: "atas",
        area: "2",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "CASCO",
        kat1: "3.59",
        kat2: "2.72",
        kat3: "2.29",
        kat4: "1.32",
        kat5: "1.16",
        segmen_bisnis: "general"
    });
    RateMv.create({
        id: "10",
        batas: "atas",
        area: "3",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "CASCO",
        kat1: "2.78",
        kat2: "2.96",
        kat3: "1.97",
        kat4: "1.25",
        kat5: "1.16",
        segmen_bisnis: "general"
    });
    RateMv.create({
        id: "11",
        area: "1",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "EQVET",
        kat1: "0.12",
        kat2: "0.12",
        kat3: "0.12",
        kat4: "0.12",
        kat5: "0.12"
    });
    RateMv.create({
        id: "12",
        area: "1",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "SRCC",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "13",
        area: "1",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "TS",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "14",
        area: "1",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "TSFWD",
        kat1: "0.075",
        kat2: "0.075",
        kat3: "0.075",
        kat4: "0.075",
        kat5: "0.075"
    });
    RateMv.create({
        id: "15",
        area: "2",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "EQVET",
        kat1: "0.1",
        kat2: "0.1",
        kat3: "0.1",
        kat4: "0.1",
        kat5: "0.1"
    });
    RateMv.create({
        id: "16",
        area: "2",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "SRCC",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "17",
        area: "2",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "TS",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "18",
        area: "2",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "TSFWD",
        kat1: "0.1",
        kat2: "0.1",
        kat3: "0.1",
        kat4: "0.1",
        kat5: "0.1"
    });
    RateMv.create({
        id: "19",
        area: "3",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "EQVET",
        kat1: "0.075",
        kat2: "0.075",
        kat3: "0.075",
        kat4: "0.075",
        kat5: "0.075"
    });
    RateMv.create({
        id: "20",
        area: "3",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "SRCC",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "21",
        area: "3",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "TS",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "22",
        area: "3",
        vehicle_type: "1",
        coverage: "COMPREHENSIVE",
        guaranty: "TSFWD",
        kat1: "0.075",
        kat2: "0.075",
        kat3: "0.075",
        kat4: "0.075",
        kat5: "0.075"
    });
    RateMv.create({
        id: "23",
        batas: "atas",
        area: "1",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "CASCO",
        kat1: "0.56",
        kat2: "0.69",
        kat3: "0.46",
        kat4: "0.3",
        kat5: "0.24"
    });
    RateMv.create({
        id: "24",
        batas: "atas",
        area: "2",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "CASCO",
        kat1: "0.78",
        kat2: "0.53",
        kat3: "0.42",
        kat4: "0.3",
        kat5: "0.24"
    });
    RateMv.create({
        id: "25",
        batas: "atas",
        area: "3",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "CASCO",
        kat1: "0.56",
        kat2: "0.48",
        kat3: "0.35",
        kat4: "0.27",
        kat5: "0.24"
    });
    RateMv.create({
        id: "26",
        area: "1",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "EQVET",
        kat1: "0.085",
        kat2: "0.085",
        kat3: "0.085",
        kat4: "0.085",
        kat5: "0.085"
    });
    RateMv.create({
        id: "27",
        area: "1",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "SRCC",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "28",
        area: "1",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "TS",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "29",
        area: "1",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "TSFWD",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "30",
        area: "2",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "EQVET",
        kat1: "0.075",
        kat2: "0.075",
        kat3: "0.075",
        kat4: "0.075",
        kat5: "0.075"
    });
    RateMv.create({
        id: "31",
        area: "2",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "SRCC",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "32",
        area: "2",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "TS",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "33",
        area: "2",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "TSFWD",
        kat1: "0.075",
        kat2: "0.075",
        kat3: "0.075",
        kat4: "0.075",
        kat5: "0.075"
    });
    RateMv.create({
        id: "34",
        area: "3",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "EQVET",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "35",
        area: "3",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "SRCC",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "36",
        area: "3",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "TS",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "37",
        area: "3",
        vehicle_type: "1",
        coverage: "TLO",
        guaranty: "TSFWD",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "38",
        area: "1",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "EQVET",
        kat1: "0.085",
        kat2: "0.085",
        kat3: "0.085",
        kat4: "0.085",
        kat5: "0.085"
    });
    RateMv.create({
        id: "39",
        area: "1",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "SRCC",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "40",
        area: "1",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "TS",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "41",
        area: "1",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "TSFWD",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "42",
        area: "2",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "EQVET",
        kat1: "0.075",
        kat2: "0.075",
        kat3: "0.075",
        kat4: "0.075",
        kat5: "0.075"
    });
    RateMv.create({
        id: "43",
        area: "2",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "SRCC",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "44",
        area: "2",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "TS",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "45",
        area: "3",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "EQVET",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
    RateMv.create({
        id: "46",
        area: "3",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "SRCC",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "47",
        area: "3",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "TS",
        kat1: "0.035",
        kat2: "0.035",
        kat3: "0.035",
        kat4: "0.035",
        kat5: "0.035"
    });
    RateMv.create({
        id: "48",
        area: "3",
        vehicle_type: "2",
        coverage: "TLO",
        guaranty: "TSFWD",
        kat1: "0.05",
        kat2: "0.05",
        kat3: "0.05",
        kat4: "0.05",
        kat5: "0.05"
    });
        return;
    };

    module.exports = initialRateMv;