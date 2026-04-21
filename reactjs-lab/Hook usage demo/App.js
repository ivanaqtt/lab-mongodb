// src/App.js
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <p>This is a paragraph.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default App;
