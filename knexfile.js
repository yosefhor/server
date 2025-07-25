import dotenv from 'dotenv';
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const development = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

const production = {
  client: 'pg',
    connection: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  pool: { min: 0, max: 1 },
  migrations: {
    tableName: 'knex_migrations'
  }
};

export default {
  development,
  production
};