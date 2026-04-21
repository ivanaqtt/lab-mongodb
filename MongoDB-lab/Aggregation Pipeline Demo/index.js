// index.js

// Import required modules
const mongoose = require('mongoose');

// Connect to MongoDB
const url = 'mongodb://localhost:27017/aggregation-demo';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection status
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Handle connection errors
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB:', err);
});

// Define database and collection name
const db = mongoose.connection.db;
const collectionName = 'sample-data';

// Create a sample document
const sampleData = {
  name: 'John Doe',
  age: 30,
  occupation: 'Developer',
};

// Insert sample data into the collection
const insertSampleData = async () => {
  try {
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(sampleData);
    console.log('Sample data inserted:', result.ops);
  } catch (err) {
    console.log('Error inserting sample data:', err);
  }
};

// Insert sample data
insertSampleData();
