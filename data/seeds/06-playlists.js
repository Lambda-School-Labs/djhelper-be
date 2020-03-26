exports.seed = function(knex) {
  return (
    knex('song_playlist_conn')
      // .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('song_playlist_conn').insert([
          {
            event_id: 1,
            song_id: 1,
            queue_num: 1
          },
          {
            event_id: 2,
            song_id: 2,
            queue_num: 2
          },
          {
            event_id: 3,
            song_id: 3,
            queue_num: 3
          },
          {
            event_id: 4,
            song_id: 4,
            queue_num: 4
          }
        ]);
      })
  );
};
