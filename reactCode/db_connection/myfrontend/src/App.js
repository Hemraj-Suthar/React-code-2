import React, { useEffect, useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [items, setItems] = useState([]);
    

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/items');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const addItem = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const newItem = await response.json();
            setItems([...items, newItem]);
            setName('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;

