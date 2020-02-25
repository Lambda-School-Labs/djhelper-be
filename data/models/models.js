const db = require('../db-config');

module.exports = {
    getAllDJ,
}

function getAllDJ(){
    return db('dj-login')
}

