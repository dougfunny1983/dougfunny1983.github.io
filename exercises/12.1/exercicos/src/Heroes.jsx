import React, { Component } from 'react';


class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseYourFavorite: ''
    };
  }

  theChosenOneWas = (state) => {
    this.setState((state) =>({chooseYourFavorite: state}))
  }

 

  creatHero = (id, item,funct) => <button key={id} type="button" onClick={()=> funct}>{item}</button>

  render() {
    const listHero = ['Ursa', 'Sven', 'Luna', 'Phantom Assassin', 'Sniper', 'Girocopter', 'Huskar']
  
    const newArray = listHero.map((select, index) => ({"id": index +1, "item": select}));
  
    console.log(newArray)

    return (
      <div>
        <input type="text" value={this.state.chooseYourFavorite}/>
        <div>
      {newArray.map(select => this.creatHero(select.id,select.item,this.theChosenOneWas(select.item)))}
        </div>
      </div>
    );
  }
}

export default Heroes;
