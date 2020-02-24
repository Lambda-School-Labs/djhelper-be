
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dj-login').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dj-login').insert([
        {username: 'andy2', password: 'asfd5t', name: 'Andy G', phone: 34525234, email: 'jash@gmail.com'},
        {username: 'joe3', password: 'asdf5tg', name: 'Joey M', phone: 54678678, email: '1reuhyg@gmail.com'},
        {username: '5toNy', password: 's768idf', name: 'Tony Tommy', phone: 67897804, email: 'sjkdfh8@gmail.com'}
      ]);
    });
};
