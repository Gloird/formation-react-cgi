import React, { Component } from "react";

interface Props {
  /**
   * Texte du bouton
   */
  texte: string;
  /**
   * Couleur de fond du bouton
   */
  couleurFond?: string;
  /**
   * Couleur du texte du bouton
   */
  couleurTexte?: string;
  /**
   * Couleur de la bordure du bouton
   */
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
