exports.up = function(knex) {
  return knex.schema.createTable('tracks', tbl => {
    // ------------- Playlist Connections Table -------------
    tbl.increments();
    tbl.text('spotify_id', 128);
    tbl.text('name', 128).notNullable();
    tbl.text('artist_name', 128);
    tbl.text('url', 128);
    tbl
      .boolean('isExplicit')
      .notNullable()
      .defaultTo('false');
    tbl
      .integer('event_id')
      .unsigned()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tracks');
};

// delete this table as per the new design; playlist and event are the same table