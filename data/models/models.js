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
  findEventById,

  getAllSongs,
  getSongById, // This file only
  addSong,
  updateSong,
  removeSong,

  getAllPlayList,
  getPlaylistEntry, // This file only
  getPlaylistByEventID,
  addPlaylistEntry,
  updatePlaylistEntry,
  removePlaylistEntry
};

// ----------------- DJs -----------------

// Get every registered DJ's information
function getAllDJs() {
  return db('djs');
}

// Get a specific DJ by id
async function findDJById(id) {
  return db('djs')
    .where({ id })
    .first();
}

async function addDJ(info) {
  console.log('Storing info:', info);
  const [id] = await db('djs')
    .returning('id') // This line is REQUIRED for PostgreSQL
    .insert(info);
  return findDJById(id);
}

// Login for a DJ
function findBy(filter) {
  console.log('The filter is', filter);
  return db('djs').where(filter);
}

// Update DJ
function updateDJ(id, updatedUser) {
  return db('djs')
    .where({ id })
    .update(updatedUser)
    .then(() => {
      return findDJById(id);
    });
}

// Completely remove a DJ
function removeDJ(id) {
  return db('djs')
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

// -----------------Songs----------------- \\

// All Songs
function getAllSongs() {
  return db('songs');
}

// Song by id
function getSongById(id) {
  return db('songs')
    .where({ id })
    .first();
}

// Add a song
async function addSong(info) {
  console.log('Storing info:', info);
  const [id] = await db('songs')
    .returning('id') // Required PostgreSQL line <---
    .insert(info);
  return getSongById(id);
}

// Update a song
function updateSong(id, updatedSong) {
  return db('songs')
    .where({ id })
    .update(updatedSong)
    .then(() => {
      return getSongById(id);
    });
}

// Completely remove a song
function removeSong(id) {
  return db('songs')
    .where('id', id)
    .del();
}

// -----------------Playlists----------------- \\
// get all playlist

function getAllPlayList() {
  return db('song_playlist_conn');
}

// Get a single entry from the playlist connection table.
function getPlaylistEntry(id) {
  return db('song_playlist_conn')
    .where({ id })
    .first();
}

// Get all songs in a playlist by event id.
async function getPlaylistByEventID(id) {
  return db('song_playlist_conn').where({ event_id: id });
}

async function addPlaylistEntry(songInfo) {
  const [id] = await db('song_playlist_conn')
    .returning('id') // Required PostgreSQL line
    .insert(songInfo);
  return getPlaylistEntry(id);
}

// Update a playlist entry
// Note: This is really only useful for changing the queue order
function updatePlaylistEntry(id, updatedPlaylist) {
  return db('song_playlist_conn')
    .where({ id })
    .update(updatedPlaylist)
    .then(() => {
      return getPlaylistEntry(id);
    });
}

function removePlaylistEntry(id) {
  return db('song_playlist_conn')
    .where('id', id)
    .del();
}

// TODO? ----------------- Playlist Cleanup ----------------

// Remove all entries for a playlist from the connections table
// This should only be run to cleanup after an event is deleted
// function removePlaylist(id) {
//   return db('song_playlist_conn')
//     .where({ id })
//     .del();
// }

// TODO? ------------------ Song Cleanup --------------------

// Remove all songs that aren't referenced in any playlists.
