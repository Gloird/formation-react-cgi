import React, { Component } from "react";

interface Props {
  texte: string;
  couleurFond?: string;
  couleurTexte?: string;
  couleurBordure?: string;
  onClick?: () => void;
}

class Button extends Component<Props> {
  render() {
    return (
      <button
        style={{
          color: this.props.couleurTexte,
          backgroundColor: this.props.couleurFond,
          border: "1px solid",
          borderColor: this.props.couleurBordure,
        }}
        onClick={this.props.onClick}
      >
        {this.props.texte}
      </button>
    );
  }
}

export default Button;
