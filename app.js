import express from 'express'
import { config } from 'dotenv';
import sequelize from './config/db.js';
const app = express();
const port = 3000;
config();
sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });