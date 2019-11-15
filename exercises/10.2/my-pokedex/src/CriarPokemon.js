import React from "react";

class CriarPokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight } = this.props.dados;

    return (
      <div className="cards">
        <p> Nome do pokemon = {name}</p>
        <img src={image} alt="Pokemom" />
        <p> Tipo do pokemon = {type}</p>
        <p>
          Peso médio do pokemon = {averageWeight.value}
          {averageWeight.measurementUnit}
        </p>
      </div>
    );
  }
}
export default CriarPokemon;
