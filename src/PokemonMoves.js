import React, { useState, useEffect } from "react";

function PokemonMoves(props) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [props.pokemonId]);
  return (
    <div>
      {pokemonData && (
        <ul>
          <h3>{pokemonData.name}'s moves:</h3>
          {pokemonData.moves.slice(0,5).map((element, index) => {
            return <li key={index}>{element.move.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default PokemonMoves;
