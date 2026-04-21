import React, { useEffect, useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      console.error('Failed to fetch students:', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name} - {student.course}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
