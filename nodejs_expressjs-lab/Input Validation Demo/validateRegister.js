// Validation middleware for /register route
function validateRegister(req, res, next) {
  const { name, email, password } = req.body;
  
  const errors = [];

  // Subtask 3.1: Validate required fields
  if (!name) errors.push('Name is required.');
  if (!email) errors.push('Email is required.');
  if (!password) errors.push('Password is required.');

  // If missing required fields
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid input data',
      errors: errors
    });
  }

  // Subtask 3.2: Email Format Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email format'
    });
  }

  // Subtask 3.3: Password Length Validation
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: 'Password must be at least 6 characters long'
    });
  }

  // All validations passed
  next();
}

module.exports = validateRegister;
