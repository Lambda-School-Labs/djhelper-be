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
    tbl.text('img_url');
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('dj-login')
  .dropTableIfExists('events');
};
