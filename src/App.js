import React, { useState } from "react";
import "./App.css";

function App () {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Type some text here");

  const increment = () => {
    setCount(count + 1);
    // setCount(prevCount => prevCount + 1);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const reset = () => {
    setCount(0);
    setMessage("Hey, you just used reset button !");
  };

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <div>{count}</div>
      <input onChange={handleMessageChange}></input>
      <div>{message}</div>
    </div>
  );
};

export default App;
