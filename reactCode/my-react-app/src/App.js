// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
    const [click, setClick] = useState(0);
    // using array destructuring here 
    // to assign initial value 0
    // to click and a reference to the function 
    // that updates click to setClick
    return (
        <div>
            <p>You clicked {click} times</p>
            <button onClick={() => setClick(click + 1)}>Click me</button>
        </div>
    );
}

export default App;
