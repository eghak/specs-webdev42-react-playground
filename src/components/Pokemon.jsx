// useEffect examples //

import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(5);

  function getPokemon() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res.data);
        setPokemon(res.data.results);
      })
      .catch((error) => console.log(error));
  }

//   useEffect(getPokemon, []);

useEffect(() => {
    console.log("useEffect run")
}, [])

  return (
    <div>
      <h1>My Pokemon</h1>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 + 5)} >Increase 5</button>
    </div>
  );
}

export default Pokemon;
