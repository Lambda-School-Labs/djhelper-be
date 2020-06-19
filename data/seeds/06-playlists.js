const playlistData = require('../jsonData/playlists.json');

console.log(playlistData.length, 'playlists being inserted');

const createPlaylist = playlist => {
  return {
    event_id: playlist.event_id,
    song_id: playlist.song_id,
    queue_num: playlist.queue_num
  };
};

exports.seed = async function(knex) {
  const playlistContainer = [];

  playlistData.map(playlist =>
    playlistContainer.push(createPlaylist(playlist))
  );
  await knex('song_playlist_conn').insert(playlistContainer);
};
