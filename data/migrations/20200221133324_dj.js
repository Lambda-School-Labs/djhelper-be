exports.up = function(knex) {
  return knex.schema
  .createTable('dj-login', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl
      .text('username', 128)
      .unique()
      .notNullable();
    tbl.text('password', 128).notNullable();
    tbl.text('name', 128).notNullable();
    tbl.text('email');
    tbl.text('phone');
    tbl.text('website');
    tbl.text('bio');
    tbl.text('profile_pic_url');
  })
  .createTable('locations', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.text('address_line_1', 128).notNullable();
    tbl.text('address_line_2', 128);
    tbl.text('city', 128).notNullable();
    tbl.text('state', 128).notNullable();
    tbl.text('zip', 128).notNullable();
    tbl.text('name', 128);
    tbl.text('phone', 128);
    tbl.text('website', 128);
    tbl.text('email', 128);
    tbl.text('img_url');
  })
  .createTable('songs', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.text('name', 128);
    tbl.text('spotify_id', 255);
  })
  .createTable('playlists', tbl => {
    // creates a primary key called id
    tbl.increments();
  })
  .createTable('request_list', tbl => {
    // creates a primary key called id
    tbl.increments();
  })
  .createTable('song_playlist_connections', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.integer('playlists_id')
       .unsigned()
       .references('id')
       .inTable('playlists')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
    tbl.integer('songs_id')
       .unsigned()
       .references('id')
       .inTable('songs')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
  })
  .createTable('events', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.integer('dj_id')
       .unsigned()
       .references('id')
       .inTable('dj-login')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
    tbl.integer('playlists_id')
       .unsigned()
       .references('id')
       .inTable('playlists')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
    tbl.integer('request_id')
       .unsigned()
       .references('id')
       .inTable('request_list')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
    tbl.text('name', 128).notNullable();
    tbl.date('date').notNullable();
    tbl.time('start_time');
    tbl.time('end_time');
    tbl.text('event_type').notNullable();
    tbl.text('description', 255);
    tbl.integer('location_id')
       .unsigned()
       .references('id')
       .inTable('locations')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
    tbl.text('img_url');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('events')
  .dropTableIfExists('song_playlist_connections')
  .dropTableIfExists('dj-login')
  .dropTableIfExists('playlists')
  .dropTableIfExists('request_list')
  .dropTableIfExists('locations')
  .dropTableIfExists('songs');
};
