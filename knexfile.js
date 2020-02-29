require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOSTNAME, // 'localhost',
      port: process.env.PG_PORT, // 5432,
      user: process.env.PG_USER, // 'postgres',
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE_NAME // 'test'
    },
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
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: { directory: './data/seeds' }
  }
};
