
exports.up = function(knex) {
    return knex.schema.createTable('dj-login', tbl => {
        // creates a primary key called id
        tbl.increments();
        tbl.text('username', 128).unique().notNullable();
        tbl.text('password', 128).notNullable();
        tbl.text('name', 128).notNullable();
        tbl.integer('phone');
        tbl.text('email');
      })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('dj-login')
};

//DB_URL=postgres://postgres:password@localhost:5432/postgres