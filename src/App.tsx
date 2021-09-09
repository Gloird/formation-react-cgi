import React from "react";
import "./App.css";
import Button from "./components/Button/button";
import Panel from "./components/Panel/panel";

function App() {
  return (
    <div className="App">
      <Panel titre="Mon jolie bouton">
        <Button
          texte="Le bouton"
          couleurBordure="#123"
          couleurFond="red"
          couleurTexte="yellow"
        />
      </Panel>
    </div>
  );
}

export default App;
