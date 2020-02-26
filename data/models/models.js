const db = require("../db-config");

module.exports = {
  getAllDJs,
  getDJsByID,
  addDJ,
  findBy,
  updateDJ,
  removeDJ
};

//Get every registered DJ's information
function getAllDJs() {
  return db("dj-login");
}

//Get a specific DJ by their id
function getDJsByID(id) {
  return db("dj-login").where({ id });
}

// TODO: This function duplicates the features of the
// function above. Choose one or the other.
async function findById(id) {
  return await db("dj-login")
    .where({ id })
    .first();
}

async function addDJ(info) {
  console.log("Storing info:", info);
  const [id] = await db("dj-login")
    .returning("id") // This line is REQUIRED for PostgreSQL
    .insert(info);
  return findById(id);
}

//Login for a DJ
function findBy(filter) {
  console.log("The filter is", filter);
  return db("dj-login").where(filter);
}

//Post Route
function updateDJ(id, updatedUser) {
    return db("dj-login")
        .where({id})
        .update(updatedUser)
        .then( () => {
            return getDJsByID(id);
        })
}

//completely remove a DJ
function removeDJ(id) {
  return db("dj-login")
    .where("id", id)
    .del();
}
