const cleaner = require('knex-cleaner');

exports.seed = async function(knex) {
  // await knex('locations').truncate();
  await knex.raw('TRUNCATE TABLE locations CASCADE');
  await knex.raw(
    'TRUNCATE TABLE song_playlist_conn,events,  djs, songs CASCADE'
  );

  // return cleaner.clean(knex, {
  //   mode: 'truncate',
  //   ignoreTables: ['knex_migrations', 'knex_migrations_lock']
  // });
};
