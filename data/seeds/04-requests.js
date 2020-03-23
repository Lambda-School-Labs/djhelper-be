exports.seed = function(knex) {
<<<<<<< HEAD
  return knex('request_list')
    .truncate() // FIXME: Truncate
    .then(function() {
      // Inserts seed entries
      return knex('request_list').insert([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
      ]);
    });
=======
  return knex('request_list').then(function() {
    // Inserts seed entries
    return knex('request_list').insert([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 }
    ]);
  });
>>>>>>> 2eb6f25412025feb2a3af241243427dd8b9cec19
};
