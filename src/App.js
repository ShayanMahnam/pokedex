import React from "react";
import "./App.css";
import Logo from "./Logo";
import CaughtPokemon from "./CoughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
let date = new Date().toLocaleDateString();



function App() {

  function logWhenClicked() {
    console.log("heey");
  }
  return (
    <>
      <Logo appName="Shayan" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </>
  );
}

export default App;
