/* eslint-disable no-use-before-define */
const db = require('../db-config');

module.exports = {
  getAllTracks,
  getEventTracks,
  getTrackById,
  addTrack,
  removeTrack,
  moveTrack,
  getEventPlaylist,
  removePlaylist
};

function getAllTracks() {
  return db('tracks');
}

function getEventTracks(eventId) {
  return db('tracks').where('event_id', eventId);
}

function getTrackById(id) {
  return db('tracks')
    .where({ id })
    .first();
}

async function addTrack(newTrack) {
  const [id] = await db('tracks')
    .returning('id')
    .insert(newTrack);

  return getTrackById(id);
}

function removeTrack(id) {
  return db('tracks')
    .where({ id })
    .del();
}

function getPlaylistById(id) {
  return db('playlist')
    .where({ id })
    .first();
}

async function moveTrack(id) {
  const track = await db('tracks')
    .select(
      'name',
      'spotify_id',
      'artist_name',
      'url',
      'isExplicit',
      'preview',
      'img',
      'event_id'
    )
    .where({ id })
    .first();
  const [idPlaylist] = await db('playlist')
    .returning('id')
    .insert(track);
  await removeTrack(id);

  return getPlaylistById(idPlaylist);
}

// get playlist

function getEventPlaylist(eventId) {
  return db('playlist').where('event_id', eventId);
}

function removePlaylist(id) {
  return db('playlist')
    .where({ id })
    .del();
}
