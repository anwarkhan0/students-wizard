import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import morgan from 'morgan';
const { Client } = require('pg');
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';
import './auth/strategies/google.strategy';

dotenv.config();

const app = express();
// { origin: process.env.FRONTEND_URL, credentials: true }
app.use(cors());
app.use(morgan('dev')); 
app.use(express.json());

app.use('/api', routes);
app.use(session({ secret: 'my-secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 4000;



const client = new Client({
  user: 'postgres', // Your PostgreSQL username
  host: 'localhost', // or your PostgreSQL server IP
  database: 'student-wizard',
  password: 'login1234',
  port: 5432, // Default PostgreSQL port
});

async function connectAndQuery() {
  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log('Database connected at:', res.rows[0].now);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await client.end(); // Close the connection
  }
}

connectAndQuery();

//for prod

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