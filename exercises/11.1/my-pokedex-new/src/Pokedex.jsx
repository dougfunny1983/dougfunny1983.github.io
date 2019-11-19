import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const {pokemons}  = this.props;
    return (
      <div className="pokedex">
        {pokemons.map(select => <Pokemon key={select.id} pokemon={select} />)}
      </div>
    );
  }
}

export default Pokedex;
