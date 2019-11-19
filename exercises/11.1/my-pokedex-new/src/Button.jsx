import React from "react";
import Data from "./data";

const tamanho = Data.length
function trocarPokemon() {
  
  
}
function voltarInicio() {

}

trocarPokemon()
// <div className="pokedex">
//   {pokemons.map(select => <Pokemon key={select.id} pokemon={select} />)}
// </div>

class Button extends React.Component {
  render() {
    return (
      <button className="button"> Trocar Pokemon </button>
    );
  }
}

export default Button;
