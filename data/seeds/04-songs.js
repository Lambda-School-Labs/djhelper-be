const data = require('../jsonData/result_songs.json');

console.log(data.length, 'songs being inserted');

const createSong = song => {
  return {
    name: song.track_name,
    spotify_id: song.track_id,
    artist_name: song.artist_name,
    popularity: song.popularity,
    acousticness: song.acousticness,
    danceability: song.danceability,
    energy: song.energy,
    instrumentalness: song.instrumentalness,
    liveness: song.liveness,
    loudness: song.loudness,
    tempo: song.tempo
  };
};

exports.seed = async function(knex) {
  // song container
  const songContainer = [];
  data.map(song => songContainer.push(createSong(song)));

  await knex.batchInsert('songs', songContainer);
};
