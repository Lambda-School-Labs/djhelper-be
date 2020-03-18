
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('request_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('request_list').insert([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4}
      ]);
    });
};
