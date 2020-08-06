/* eslint-disable no-use-before-define */
const db = require('../db-config');

module.exports = {
  getAllTracks,
  getTrackById,
  addTrack,
  removeTrack
};

function getAllTracks() {
  return db('tracks');
}

function getTrackById(id) {
  return db('tracks')
    .where({ id })
    .first();
}

async function addTrack(newTrack) {
  console.log('new track being added: ', newTrack);

  const [id] = await db('tracks')
    .returning('id')
    .insert(newTrack);

  return getTrackById(id);
}

// function addTrack(newTrack) {
//   console.log('new track being added: ', newTrack);

//   return db('tracks').insert(newTrack);
// }

function removeTrack(id) {
  return db('tracks')
    .where({ id })
    .del();
}
