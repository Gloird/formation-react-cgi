import React, { Component } from "react";
import Button from "../Button/button";

//Création d'un interface pour le state
interface CounterState {
  counter: number;
}

//ICI pas de props donc on met {}
class Counter extends Component<{}, CounterState> {
  //Ici pas de type/interface pour le props donc on met {}
  constructor(props: {}) {
    //Il est obligatoir d'appeler le super avec au moins les props
    super(props);
    //Initialisation du sate
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <Button
          texte="+1"
          onClick={() => {
            //Il est important d'utiliser un callbakc pour metre a jour le stat,
            //car dans ce cas la l'utilisateur peux spam le bouton est le state
            //doit bien faire +1 ou -1 avec le nombre qui ce trouve dans le state a ce moment là
            this.setState((state) => {
              return { counter: state.counter + 1 };
            });
          }}
        />
        {this.state.counter}
        <Button
          texte="-1"
          onClick={() => {
            //Il est important d'utiliser un callbakc pour metre a jour le stat,
            //car dans ce cas la l'utilisateur peux spam le bouton est le state
            //doit bien faire +1 ou -1 avec le nombre qui ce trouve dans le state a ce moment là
            this.setState((state) => {
              return { counter: state.counter - 1 };
            });
          }}
        />
      </div>
    );
  }
}

export default Counter;
