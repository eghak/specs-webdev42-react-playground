import React from "react";

function Fruits(props) {
  const myFruits = props.fruits.map((fruit) => {
    return <p>{fruit}</p>;
  });

  return (
    <div>
        {myFruits}
  </div>
  )
}

export default Fruits;
