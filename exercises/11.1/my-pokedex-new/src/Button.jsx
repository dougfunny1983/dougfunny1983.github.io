import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="button" onClick={this.props.contNumber}>
        Trocar Pokemon
      </button>
    );
  }
}

export default Button;
