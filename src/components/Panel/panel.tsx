import React, { Component } from "react";

interface Props {
  /**
   * Titre du panel
   */
  titre: string;
}
interface State {}

export default class Panel extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <span>{this.props.titre}</span>
        {this.props.children}
      </div>
    );
  }
}
