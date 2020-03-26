exports.seed = function(knex) {
  return (
    knex('songs')
      // .truncate()
      .then(function() {
        // Inserts seed entries
        return knex('songs').insert([
          {
            name: 'I Will Always Love You',
            spotify_id: '4eHbdreAnSOrDDsFfc4Fpm'
          },
          {
            name: 'Cannon in D - Piano (Also, Canon, or Kanon)',
            spotify_id: '1losfQ1svP9iweY2116Jbr'
          },
          {
            name: 'YMCA',
            spotify_id: '7Cp69rNBwU0gaFT8zxExlE'
          },
          {
            name: 'Wedding March',
            spotify_id: '4eE71tR5gGXa2sgmgKnZzs'
          },
          {
            name: 'What a Wonderful World',
            spotify_id: '6VijsnEgDH9M6ajPlrdLsY'
          }
        ]);
      })
  );
};
