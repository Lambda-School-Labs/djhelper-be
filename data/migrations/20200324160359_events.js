exports.up = function(knex) {
  return knex.schema.createTable('events', tbl => {
    // ------------------- Events Table ---------------------
    tbl.increments();
    tbl
      .integer('dj_id') // FK
      .unsigned()
      .references('id')
      .inTable('djs')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    tbl
      .integer('location_id')
      .unsigned()
      .references('id')
      .inTable('locations')
      .onDelete('RESTRICT') // FIXME
      .onUpdate('CASCADE');
    tbl.text('img_url');
    tbl.text('name', 128).notNullable();
    tbl.date('date').notNullable();
    tbl.time('start_time');
    tbl.time('end_time');
    tbl.text('event_type').notNullable();
    tbl.text('description', 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('events');
};
