exports.up = function(knex) {
  return knex.schema.createTable('song_playlist_conn', tbl => {
    // ------------- Playlist Connections Table -------------
    tbl.increments();
    tbl
      .integer('event_id')
      .unsigned()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    tbl
      .integer('song_id')
      .unsigned()
      .references('id')
      .inTable('songs')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    tbl.integer('queue_num');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('song_playlist_conn');
};
