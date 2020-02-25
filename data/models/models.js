const db = require('../db-config');

module.exports = {
    getAllDJs,
    getDJsByID
}

function getAllDJs(){
    return db('dj-login')
}

function getDJsByID(id){
    return db('dj-login').where({ id });
}