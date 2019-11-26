import React, { Component } from 'react'
import Heroes from './Heroes'

class App extends Component {

  render() {
    const listHero = ['Ursa', 'Sven', 'Luna', 'Phantom Assassin', 'Sniper', 'Girocopter', 'Huskar']
    return (
      <Heroes heroes={listHero}/>
      
      
    )
  }
}

export default App;

