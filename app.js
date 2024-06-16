import { config } from 'dotenv';
import express from 'express';
import sequelize from './config/db.js';
import bankRoutes from './routes/bankRoutes.js';

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to PostgreSQL has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/api', bankRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Bank API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
