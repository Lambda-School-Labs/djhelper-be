const db = require('../db-config');

module.exports = {
    getAllDJs,
    getDJsByID,
    addDJ,
    findBy,
    updateDJ,
    removeDJ
}

//Get every registered DJ's information
function getAllDJs(){
    return db('dj-login')
}

//Get a specific DJ by their id
function getDJsByID(id){
    return db('dj-login').where({ id });
}

//Add a new DJ to the table
function addDJ(info) {
    return db('dj-login')
      .insert(info)
      .then(([id]) => this.get(id));
  }

  /*
  Another registration option if above does not work:
  function register(info) {
    return db('dj-login')
    .insert(info, 'id')
};
  */

  //Login for a DJ
  function findBy(filter) {
    return db('dj-login').where(filter);
  }

  //Update a DJs info they used at registration
  function updateDJ(id, changes) {
    return db('dj-login')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  }

  //completely remove a DJ
    function removeDJ(id) {
        return db('dj-login')
        .where('id', id)
        .del();
    }