import React, { useState } from "react";


const CaughtPokemon = (props) => {
  const [caught , setCaught] = useState([]);
  const nameList = ["shayan", "Mana", "Bahareh"];
function catchPokemon () {
  const random = Math.floor(Math.random() * nameList.length);
 setCaught((oldCaught) => oldCaught.concat(nameList[random]));
}

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>{
      caught.map((element, index) => (
          <li key={index}>{element}</li>
      ))
      }</ul>
      <button onClick={catchPokemon}> Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;