import React, { useState } from 'react';

function StudentForm({ onAdd }) {
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
        onAdd(); // refresh list
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
      <p>{message}</p>
    </form>
  );
}

export default StudentForm;
