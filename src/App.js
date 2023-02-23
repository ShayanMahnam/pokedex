import React from "react";
import "./App.css";
import Logo from "./Logo";
import CaughtPokemon from "./CoughtPokemon";
import BestPokemon from "./BestPokemon";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
let date = new Date().toLocaleDateString();

function App() {
  return (
    <>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </>
  );
}

export default App;
