exports.seed = function(knex) {
  return knex('playlists')
    .truncate() // FIXME: Truncate
    .then(function() {
      // Inserts seed entries
      return knex('playlists').insert([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ]);
    });
};
