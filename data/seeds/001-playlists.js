
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('playlists').insert([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
      ]);
    });
};
