import React from 'react';

const Child = ({ data, updateData }) => {
  return (
    <div style={{ margin: '10px' }}>
      <p>Data from Parent: {data}</p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default Child;
