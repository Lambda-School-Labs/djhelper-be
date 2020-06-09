exports.up = function(knex) {
  return knex.schema.createTable('songs', tbl => {
    tbl.increments();
    tbl.text('name', 128);
    tbl.text('spotify_id', 255);
    // new columns
    tbl.string('artist_name', 128);
    tbl.integer('popularity', 128);
    tbl.integer('acousticness', 128);
    tbl.integer('danceability', 128);
    tbl.integer('energy', 128);
    tbl.integer('instrumentalness', 128);
    tbl.integer('liveness', 128);
    tbl.integer('loudness', 128);
    tbl.integer('tempo', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
