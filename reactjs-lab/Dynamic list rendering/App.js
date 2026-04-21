import React, { useState } from 'react';

function App() {
  // Step 2: Define initial data array
  const initialItems = ['Apple', 'Banana', 'Cherry'];

  // Step 2: Store data in state
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  // Step 4.1: Add item to list
  const handleAddItem = () => {
    // Step 5.2: Validate user input
    if (newItem.trim() === '') {
      alert('Please enter a valid item.');
      return;
    }
    setItems([...items, newItem.trim()]);
    setNewItem(''); // Clear input after adding
  };

  // Step 4.2: Remove item from list
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Dynamic List</h2>

      {/* Step 5.1: Handle empty list scenario */}
      {items.length === 0 ? (
        <p>The list is empty.</p>
      ) : (
        // Step 3.1: Use map() for rendering
        <ul>
          {items.map((item, index) => (
            // Step 3.2: Add key prop
            <li key={index} style={{ marginBottom: '8px' }}>
              {item}
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Step 5.2: Validate user input */}
      <input
        type="text"
        placeholder="Add new item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />
      <button onClick={handleAddItem} style={{ padding: '8px' }}>
        Add Item
      </button>
    </div>
  );
}

export default App;
