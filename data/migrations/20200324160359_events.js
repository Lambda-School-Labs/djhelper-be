exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
    // ------------------- Events Table ---------------------
    tbl.increments();
    tbl
      .integer('dj_id')
      .unsigned()
      .references('id')
      .inTable('djs')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

    tbl.text('img_url');
    tbl.text('name', 128).notNullable();
    tbl.string('date').notNullable();

    tbl.text('event_type').notNullable();
    tbl.text('description', 255);
    tbl.text('notes', 1024);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
