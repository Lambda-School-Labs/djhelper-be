
exports.up = function(knex) {
    return knex.schema.createTable('dj-login', tbl => {
        // creates a primary key called id
        tbl.increments();
        tbl.text('username', 128).unique().notNullable();
        tbl.text('password').notNullable();
      })
};

exports.down = function(knex) {
  
};
