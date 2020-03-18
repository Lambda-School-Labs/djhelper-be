/* eslint-disable no-use-before-define */
const db = require('../db-config');

module.exports = {
  getAllDJs,
  addDJ,
  findBy,
  findDJById,
  updateDJ,
  removeDJ,
  getAllEvents,
  addEvent,
  updateEvent,
  removeEvent,
  getAllLocations,
  addLocation,
  updateLocation,
  removeLocation
};

// ----------------- DJs -----------------

// Get every registered DJ's information
function getAllDJs() {
  return db('dj-login');
}

// Get a specific DJ by id
async function findDJById(id) {
  return db('dj-login')
    .where({ id })
    .first();
}

async function addDJ(info) {
  console.log('Storing info:', info);
  const [id] = await db('dj-login')
    .returning('id') // This line is REQUIRED for PostgreSQL
    .insert(info);
  return findDJById(id);
}

// Login for a DJ
function findBy(filter) {
  console.log('The filter is', filter);
  return db('dj-login').where(filter);
}

// Update DJ
function updateDJ(id, updatedUser) {
  return db('dj-login')
    .where({ id })
    .update(updatedUser)
    .then(() => {
      return findDJById(id);
    });
}

// Completely remove a DJ
function removeDJ(id) {
  return db('dj-login')
    .where('id', id)
    .del();
}

// ----------------- Events -----------------

// All Events
function getAllEvents() {
  return db('events');
}

// Get a specific Event by id
async function findEventById(id) {
  return db('events')
    .where({ id })
    .first();
}

// Add an Event
async function addEvent(info) {
  console.log('Storing info:', info);
  const [id] = await db('events')
    .returning('id') // Required PostgreSQL line <---
    .insert(info);
  return findEventById(id);
}

// Update an event
async function updateEvent(id, updatedEvent) {
  return db('events')
    .where({ id })
    .update(updatedEvent)
    .then(() => {
      return findEventById(id);
    });
}

// Completely remove an event
async function removeEvent(id) {
  return db('events')
    .where({ id })
    .del();
}

// ----------------- Locations -----------------

// All Locations
function getAllLocations() {
  return db('locations');
}

// Get a specific Location by id
async function findLocationById(id) {
  return db('locations') // TODO: Check
    .where({ id })
    .first();
}

// Add a location
async function addLocation(info) {
  console.log('Storing info:', info);
  const [id] = await db('locations')
    .returning('id') // Required PostgreSQL line <---
    .insert(info);
  return findLocationById(id);
}

// Update a Location
async function updateLocation(id, updatedLocation) {
  return db('locations')
    .where({ id })
    .update(updatedLocation)
    .then(() => {
      return findLocationById(id);
    });
}

// Completely remove a location
async function removeLocation(id) {
  return db('locations')
    .where('id', id)
    .del();
}

// -------------- Playlists --------------
