exports.seed = function(knex) {
<<<<<<< HEAD
  return knex('playlists')
    .truncate() // FIXME: Truncate
=======
  return knex('playlists') // .truncate()
>>>>>>> 2eb6f25412025feb2a3af241243427dd8b9cec19
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
