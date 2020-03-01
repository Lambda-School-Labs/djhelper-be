/* eslint-disable no-use-before-define */
const db = require('../db-config');

module.exports = {
  getAllDJs,
  getDJsByID,
  addDJ,
  findBy,
  findById,
  updateDJ,
  removeDJ
};

// Get every registered DJ's information
function getAllDJs() {
  return db('dj-login');
}

// Get a specific DJ by id
// TODO: These two functions accomplish the same thing.
// Both have external dependencies!
// Choose one based on desired behavior and update deps.
// ----------------------------------------------------
//
// Dan
function getDJsByID(id) {
  return db('dj-login').where({ id });
}
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Andrew
async function findById(id) {
  return db('dj-login')
    .where({ id })
    .first();
}
// ------------------------------------------------------

async function addDJ(info) {
  console.log('Storing info:', info);
  const [id] = await db('dj-login')
    .returning('id') // This line is REQUIRED for PostgreSQL
    .insert(info);
  return findById(id);
}

// Login for a DJ
function findBy(filter) {
  console.log('The filter is', filter);
  return db('dj-login').where(filter);
}

// Update DJ
// --------------------------------------------------------
// TODO: Choose one of the following 2 functions based
// on desired behavior.:
//
// Andrew:
// async function updateDJ(id, djData) {
//   return await db("dj-login")
//     .where({ id })
//     .update(djData);
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --- -- -- -- --
// Dan
function updateDJ(id, updatedUser) {
  return db('dj-login')
    .where({ id })
    .update(updatedUser)
    .then(() => {
      return getDJsByID(id);
    });
}
// --------------------------------------------------------

// Completely remove a DJ
function removeDJ(id) {
  return db('dj-login')
    .where('id', id)
    .del();
}
