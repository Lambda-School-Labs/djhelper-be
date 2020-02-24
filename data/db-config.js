// const knex = require('knex');

// const configOptions = require('../knexfile').development;

// module.exports = knex(configOptions);

//done

const knex = require('knex');

const knexfile = require('../knexfile');


const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions);