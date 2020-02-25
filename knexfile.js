// Update with your config settings.
//Following this guide
//https://dev.to/easybuoy/setting-up-a-node-api-with-postgres-and-knex-588f

const pgUser = process.env.PG_USER || 'postgres';
const pgDb = process.env.PG_DB || 'postgres'
const connection = `postgres://${pgUser}@localhost/${pgDb}`;
module.exports = {

  development: {
    // our DBMS driver
    client: 'pg',
    // the location of our db
    //connection: process.env.DB_URL,
    connection: connection,
    // necessary when using sqlite3
    useNullAsDefault: true,
    // generates migration files in a data/migrations/ folder
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
  },
  pool: {
    min: 2,
    max: 10,

  }
  }
};

//sqlite settings for connection
// connection: {
//   filename: './data/database_file.db3',
// },

// default knex file set up below vvvvv

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
