exports.up = function(knex) {
  return knex.schema.createTable('songs', tbl => {
    tbl.increments();
    tbl.text('name', 128);
    tbl.text('spotify_id', 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
