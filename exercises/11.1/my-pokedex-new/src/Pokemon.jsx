import React from "react";

class Pokemon extends React.Component {
  
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name}`} />
      </div>
    );
  }
}

export default Pokemon;
