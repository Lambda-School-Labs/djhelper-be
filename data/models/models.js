/* eslint-disable no-use-before-define */
const db = require('../db-config');

module.exports = {
  getAllDJs,
  getDJsByID,
  addDJ,
  findBy,
  findById,
  updateDJ,
  removeDJ,
  getAllEvents,
  getEventsByID,
  addEvent,
  updateEvent,
  removeEvent,
  getAllLocations,
  getLocationsByID,
  addLocation,
  updateLocation,
  removeLocation
};

//-----------------DJ's-----------------\\

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

//-----------------EVENTS-----------------\\

//All Events
function getAllEvents() {
  return db('events');
}

//Events by id
function getEventsByID(id) {
  return db('events').where({ id });
}

//Add an Event
async function addEvent(info) {
  console.log('Storing info:', info);
  const [id] = await db('events')
    .returning('id') //Required PostgreSQL line <---
    .insert(info);
  return findById(id);
}

//Update an event
function updateEvent(id, updatedEvent) {
  return db('events')
    .where({ id })
    .update(updatedEvent)
    .then(() => {
      return getEventsByID(id);
    });
}

// Completely remove an event
function removeEvent(id) {
  return db('events')
    .where('id', id)
    .del();
}

//-----------------Locations-----------------\\

//All Locations
function getAllLocations() {
  return db('locations');
}

//Locations by id
function getLocationsByID(id) {
  return db('locations').where({ id });
}

//Add an Event
async function addLocation(info) {
  console.log('Storing info:', info);
  const [id] = await db('locations')
    .returning('id') //Required PostgreSQL line <---
    .insert(info);
  return findById(id);
}

//Update an event
function updateLocation(id, updatedLocation) {
  return db('locations')
    .where({ id })
    .update(updatedLocation)
    .then(() => {
      return getLocationsByID(id);
    });
}

// Completely remove an event
function removeLocation(id) {
  return db('locations')
    .where('id', id)
    .del();
}