import React, { useState } from 'react';

const Form = () => {
  // State for input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for errors
  const [errors, setErrors] = useState({});
  // State for success message
  const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors = {};

    // Required validation
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email))
      newErrors.email = 'Invalid email format';

    // Password length validation
    if (password && password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    if (validate()) {
      setSuccess('Form submitted successfully!');
      // Reset form
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Name</label><br />
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </div>

      {/* Email */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email</label><br />
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      {/* Password */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password">Password</label><br />
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      {/* Submit Button */}
      <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>

      {/* Success Message */}
      {success && (
        <div style={{ marginTop: '1rem', color: 'green' }}>{success}</div>
      )}
    </form>
  );
};

export default Form;
