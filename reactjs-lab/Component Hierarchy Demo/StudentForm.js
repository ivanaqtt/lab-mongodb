import React, { useState } from 'react';

function StudentForm({ onDataChange }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, course }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Student added successfully!');
        onDataChange(); // notify parent to refresh list
        setName('');
        setCourse('');
      } else {
        setMessage('Error: ' + data.error);
      }
    } catch (err) {
      setMessage('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Add Student</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default StudentForm;
