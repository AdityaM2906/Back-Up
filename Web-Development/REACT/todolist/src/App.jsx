import React, { useState } from "react";

function App() {
  const [currentInput, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setItems((prevItem) => {
      return [...prevItem, currentInput];
    });

    setInput("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleInput}
          name="input"
          value={currentInput}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem, index) => (
            <li key={index}>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
