// server.js

const express = require('express');
const app = express();

// Enable JSON parsing
app.use(express.json());

// Route that returns a successful response
app.get('/success', (req, res) => {
  res.json({ success: true, message: 'This is a successful response' });
});

// Route that deliberately throws an error
app.get('/error', (req, res, next) => {
  const error = new Error('This is a deliberate error');
  error.status = 500; // Optional: specify error status
  next(error); // Pass error to error handling middleware
});

// Handle unknown routes (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handling middleware (must be after all routes)
app.use((err, req, res, next) => {
  console.error(err); // Log error for debugging
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
