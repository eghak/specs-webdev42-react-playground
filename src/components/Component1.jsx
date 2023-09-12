import React from "react";
import { useState } from "react";

function Component1() {
  // const myUseState = useState("John");
  // console.log(myUseState)
  const [name, setName] = useState("John");

  console.log(name);

  function changeToBob() {
    setName("Bob");
  }

  return (
    <div>
      <h1>Hello, welcome {name}!</h1>
      <button onClick={changeToBob}>Change Name</button>
      {/* <button onClick={() => setName("Bob")}>Change Name</button> */}
    </div>
  );
}

export default Component1;
