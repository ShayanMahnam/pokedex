const BestPokemon = (props) => {

  return (
    <div>
      <p>My favorite Pokemon is Squirtle</p>
      <ul>
        {props.abilities.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;