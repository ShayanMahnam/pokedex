import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    if (pokemonNameInput.trim() !== "") {
      setCaught([...caught, pokemonNameInput]);
      setPokemonNameInput("");
    } else {
      alert("Please enter a Pokemon name.");
    }
  };

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;
