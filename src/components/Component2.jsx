import React, { useRef } from "react";

function Component2() {
  const input = useRef(null);


  const changePlaceholder = () => {
    input.current.placeholder = "write here..."
    console.log(input)
  }

  return (
    <div>
      <input type="text" placeholder="type here.." ref={input} />
      <button onClick={changePlaceholder} >Change placeholder</button>
    </div>
  );
}

export default Component2;
