exports.up = function(knex) {
  return knex.schema.createTable('dj-login', tbl => {
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
  .createTable('events', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.text('name', 128).notNullable();
    tbl.date('date').notNullable();
    tbl.time('start_time');
    tbl.time('end_time');
    tbl.text('event_type').notNullable();
    tbl.text('description', 255);
    //tbl.foreign('location_id').references('id').inTable('locations');
    tbl.text('img_url');
  })
  .createTable('locations', tbl => {
    // creates a primary key called id
    tbl.increments();
    tbl.text('address_line_1', 128).notNullable();
    tbl.text('address_line_2', 128).notNullable();
    tbl.text('city', 128).notNullable();
    tbl.text('state', 128).notNullable();
    tbl.text('zip', 128).notNullable();
    tbl.text('name', 128);
    tbl.text('phone', 128);
    tbl.text('website', 128);
    tbl.text('email', 128);
    tbl.text('img_url');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('dj-login')
  .dropTableIfExists('events')
  .dropTableIfExists('locations');
};
