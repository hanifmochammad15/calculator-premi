const db = require("../models");
const Role = db.role;


const initialRole = ()=>{
    Role.create({
        id: 1,
        name: "user"
    });
    
    Role.create({
        id: 2,
        name: "moderator"
    });
    
    Role.create({
        id: 3,
        name: "admin"
    });
    return;
};

module.exports = initialRole;