// db.js
import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/mydatabase'; // Replace with your MongoDB connection string

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;