import React, { useState } from "react";
import Fruits from "./Fruits";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [fruits, setFruits] = useState(["apple", "banana", "orange", "melon"]);
  const [showFruits, setShowFruits] = useState(false)


  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  function handleChange(e) {
    // console.log(e)
    setName(e.target.value);
    console.log("This is e.target.value:", e.target.value);
  }

  console.log("This is name:", name);



  return (
    <div>
      {/* <h1>COUNTER</h1>

      <input
        type="text"
        placeholder="type name here..."
        name="nameInput"
        onChange={handleChange}
      />

      <h1>
        {name} has clicked {count} times
      </h1>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button> */}


      <br />
      <br />

      <h1>Show me some fruits text:</h1>
      <button onClick={() => setShowFruits(true)} >Show Fruits</button>
      <button onClick={() => setShowFruits(false)} >Hide Fruits</button>


      {showFruits ? <Fruits fruits={fruits} /> : null}

    </div>
  );
}

export default Counter;
