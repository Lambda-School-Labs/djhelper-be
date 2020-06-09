exports.up = function(knex) {
  return knex.schema.createTable('locations', tbl => {
    // ------------------- Locations Table ---------------------
    tbl.increments();
    tbl.text('name', 128);
    tbl.text('address_line_1', 128).notNullable();
    tbl.text('address_line_2', 128);
    tbl.text('city', 128).notNullable();
    tbl.text('state', 128).notNullable();
    tbl.text('zip', 128).notNullable();
    tbl.text('phone', 128);
    tbl.text('website', 128);
    tbl.text('email', 128);
    tbl.text('img_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('locations');
};
