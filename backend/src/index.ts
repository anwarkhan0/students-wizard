import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
const { Client } = require('pg');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const client = new Client({
  user: 'your_username',
  host: 'localhost', // or your PostgreSQL server IP
  database: 'your_database_name',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

async function connectAndQuery() {
  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log('Database connected at:', res.rows[0].now);
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await client.end(); // Close the connection
  }
}

connectAndQuery();

// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'your_database_name',
//   password: 'your_password',
//   port: 5432,
//   max: 20, // Max connections in pool
//   idleTimeoutMillis: 30000, // Close idle connections after 30s
//   connectionTimeoutMillis: 2000, // Fail fast if connection takes too long
// });

// async function queryWithPool() {
//   try {
//     const res = await pool.query('SELECT NOW()');
//     console.log('Database connected at:', res.rows[0].now);
//   } catch (err) {
//     console.error('Query error:', err);
//   }
// }

// queryWithPool();