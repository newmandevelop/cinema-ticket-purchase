// app.ts
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import cinemaRoutes from './routes/cinemaRoutes';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/cinema_db";

const app = express();

mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/cinemas', cinemaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});