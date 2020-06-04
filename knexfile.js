require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_DEV_URL,
    // connection: {
    //   host: process.env.DB_HOSTNAME, // 'localhost',
    //   port: process.env.DB_PORT, // 5432,
    //   user: process.env.DB_USER, // 'postgres',
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE_NAME // 'test'
    // },
    // generates migration files in a data/migrations/ folder
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  testing: {
    // TODO: Add testing configuration details
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  },

  production: {
    // TODO: Add production configuration details
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  }
};
