import React, { useState } from 'react';
import './App.css';

function App() {
    const [color, setColor] = useState('red');

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor('pink')}>Click Me!</button>
            <button type="button" onClick={() => setColor('red')}>Click Me!</button>
            <button type="button" onClick={() => setColor('black')}>Click Me!</button>
            <button type="button" onClick={() => setColor('blue')}>Click Me!</button>
       </>
    );
}

export default App;
