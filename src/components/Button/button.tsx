import React, { Component } from "react";

interface Props {
  texte: string;
  couleurFond?: string;
  couleurTexte?: string;
  couleurBordure?: string;
}
interface State {}

class Button extends Component<Props, State> {
  state = {};

  render() {
    return (
      <button
        style={{
          color: this.props.couleurTexte,
          backgroundColor: this.props.couleurFond,
          border: "1px solid",
          borderColor: this.props.couleurBordure,
        }}
      >
        {this.props.texte}
      </button>
    );
  }
}

export default Button;
