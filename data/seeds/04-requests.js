exports.seed = function(knex) {
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
};
