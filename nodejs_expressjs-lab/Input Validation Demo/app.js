const express = require('express');
const validateRegister = require('./middleware/validateRegister');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Demo POST route with validation middleware
app.post('/register', validateRegister, (req, res) => {
  // If validation passes, this handler runs
  res.json({
    success: true,
    message: 'Registration successful',
    data: req.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
