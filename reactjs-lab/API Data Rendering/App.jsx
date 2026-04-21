import React, { useState, useEffect } from 'react';
import DataList from './components/DataList';
import Loader from './components/Loader';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>API Data Viewer</h1>
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && <DataList items={data} />}
    </div>
  );
}

export default App;
