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
  findByIdEvent,
  getEventsByID,
  addEvent,
  updateEvent,
  removeEvent,
  getAllLocations,
  findByIdLocation,
  getLocationsByID,
  addLocation,
  updateLocation,
  removeLocation,
  findByLoc,
  getAllSongs,
  findByIdSong,
  getSongsByID,
  addSong,
  updateSong,
  removeSong,
  getAllPlaylists,
  getPlaylistsByID,
  addPlaylists,
  updatePlaylists,
  removePlaylist,
  getAllPlaylistConnects,
  getPlaylistConnectsByID

};

// FIXME: FIND MY ID FOR ALL TABLES

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

// All Events
function getAllEvents() {
  return db('events');
}

async function findByIdEvent(id) {
  return db('events')
    .where({ id })
    .first();
}

// Events by id
function getEventsByID(id) {
  return db('events').where({ id });
}

// Add an Event
async function addEvent(info) {
  console.log('Storing info:', info);
  const [id] = await db('events')
    .returning('id') //Required PostgreSQL line <---
    .insert(info);
  return findByIdEvent(id);
}

// Update an event
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

function findByLoc(filter) {
  console.log('The filter is', filter);
  return db('locations').where(filter);
}

async function findByIdLocation(id) {
  return db('locations')
    .where({ id })
    .first();
}

// All Locations
function getAllLocations() {
  return db('locations');
}

// Locations by id
function getLocationsByID(id) {
  return db('locations').where({ id });
}

// Add an Location
async function addLocation(info) {
  console.log('Storing info:', info);
  const [id] = await db('locations')
    .returning('id') //Required PostgreSQL line <---
    .insert(info);
  return findByIdLocation(id);
}

// Update an Location
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

//-----------------Songs-----------------\\

// All Songs
function getAllSongs() {
  return db('songs');
}

async function findByIdSong(id) {
  return db('songs')
    .where({ id })
    .first();
}

// Songs by id
function getSongsByID(id) {
  return db('songs').where({ id });
}

// Add an Songs
async function addSong(info) {
  console.log('Storing info:', info);
  const [id] = await db('songs')
    .returning('id') //Required PostgreSQL line <---
    .insert(info);
  return findByIdSong(id);
}

// Update an songs
function updateSong(id, updatedSong) {
  return db('songs')
    .where({ id })
    .update(updatedSong)
    .then(() => {
      return getSongsByID(id);
    });
}

// Completely remove an songs
function removeSong(id) {
  return db('songs')
    .where('id', id)
    .del();
}

//-----------------Playlists-----------------\\

// All Playlists
function getAllPlaylists() {
  return db('playlists');
}

async function findByIdPlaylist(id) {
  return db('playlists')
    .where({ id })
    .first();
}

// Playlists by id
function getPlaylistsByID(id) {
  return db('playlists').where({ id });
}

// Add an Playlist
async function addPlaylists(info) {
  console.log('Storing info:', info);
  const [id] = await db('playlists')
    .returning('id') //Required PostgreSQL line <---
    .insert(info);
  return findByIdPlaylist(id);
}

// Update an Playlist
function updatePlaylists(id, updatedPlaylist) {
  return db('songs')
    .where({ id })
    .update(updatedPlaylist)
    .then(() => {
      return getPlaylistsByID(id);
    });
}

// Completely remove an Playlist
function removePlaylist(id) {
  return db('playlists')
    .where('id', id)
    .del();
}

//-----------------Playlist Connections-----------------\\

// All Playlists
function getAllPlaylistConnects() {
  return db('song_playlist_connections');
}

// Playlists by id
function getPlaylistConnectsByID(id) {
  return db('song_playlist_connections').where({ id });
}