import React, { Component } from 'react';


class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseYourFavorite: this.props.chooseYourFavorite,
      display: 'none'
    };
    
  }

openAndClose = () => {
  this.state.display === "none"
    ? this.setState({ display: "block" })
    : this.setState({ display: "none" });
}

theChosenOneWas = (valor) => {
  this.setState({chooseYourFavorite: valor})
}

  creatHero = ({id, item}) => <li key={id} onClick={()=> this.theChosenOneWas(item)}>{item}</li>

  render() {
    console.log(this.state)
    console.log("----------------------------")
    console.log(this.props)
    const newArray = this.props.heroes.map((select, index) => ({"id": index +1, "item": select}));
  
    return (
      <div className='App'>
        <h1 onClick={this.openAndClose} > {this.state.chooseYourFavorite}</h1>
          <ol style={{ display: this.state.display }}>
            {newArray.map(select => this.creatHero(select))}
          </ol>
      </div>
    );
  }
}

export default Heroes;

Heroes.defaultProps = {
  chooseYourFavorite: 'Click Here'
};
