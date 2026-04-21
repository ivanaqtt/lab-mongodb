import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAdd = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Student Management</h1>
      <StudentForm onAdd={handleAdd} />
      <StudentList key={refresh} />
    </div>
  );
}

export default App;
