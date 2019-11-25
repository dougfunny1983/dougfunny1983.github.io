import React, { Component } from 'react';


class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseYourFavorite: ''
    };
  }

  theChosenOneWas = (valor) => {
    this.setState({chooseYourFavorite: valor})
  }

  creatHero = ({id, item}) => <button key={id} type="button" onClick={()=> this.theChosenOneWas(item)}>{item}</button>

  render() {
    const listHero = ['Ursa', 'Sven', 'Luna', 'Phantom Assassin', 'Sniper', 'Girocopter', 'Huskar']
  
    const newArray = listHero.map((select, index) => ({"id": index +1, "item": select}));
  
    console.log(newArray)

    return (
      <div>
        <button type="text" onClick={}> {this.state.chooseYourFavorite}</button>
          <div>
            {newArray.map(select => this.creatHero(select))}
          </div>
      </div>
    );
  }
}

export default Heroes;
