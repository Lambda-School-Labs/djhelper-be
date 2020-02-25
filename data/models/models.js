const db = require('../db-config');

module.exports = {
    getAllDJs,
    getDJsByID,
    addDJ
}

function getAllDJs(){
    return db('dj-login')
}

function getDJsByID(id){
    return db('dj-login').where({ id });
}

//Add DJ
function addDJ(info) {
    return db('dj-login')
      .insert(info)
      .then(([id]) => this.get(id));
  }