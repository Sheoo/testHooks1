import React, { useState, useEffect } from "react";
import SomeComponent from "./SomeComponent";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Type some text here");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cities")
      .then(res => res.json())
      .then(data => setCities(data.map(city => city.name)));
  });

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
    setMessage("Hey, you just used reset button !");
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <div>{count}</div>
      <SomeComponent handleMessageChange={handleMessageChange} />
      <div>{message}</div>
      {React.Children.map(cities, element => (
        <div>{element}</div>
      ))}
    </div>
  );
};

export default App;
