import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    // console.log(list);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input != null) {
            const newInput = {
                id: Math.random(),
                value: input
            }
            setList([...list, newInput]);
            setInput('');
        }  
    };

    const deleteItem = (id) => {
        const deleteInput = list.filter(item => item.id != id);
        setList(deleteInput);
    };

    const editItem = (index) => {
        const editInput = prompt('Edit to do');
        if (editInput) {
            const updatedList = [...list];
            updatedList[index].value = editInput;
            setList(updatedList);
        };
    };

    return (
        <div className="App">
            <h1>To do App</h1>
            <form>
                <label className="name"></label>
                <input type="text" className="name" placeholder="Type task here..." value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className="btn btn-primary" type='button' onClick={handleSubmit}>Add Task</button>
            </form>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index} className="list-item">
                            {item.value}
                            <div className="button-group">
                                <button onClick={() => deleteItem(item.id)} className="delete-button btn btn-primary">Delete</button>
                                <button onClick={() => editItem(index)} className="edit-button btn btn-primary">Edit</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default App;
