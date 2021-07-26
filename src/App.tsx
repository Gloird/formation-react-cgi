import React from "react";
import "./App.css";
import Button from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button
        texte="TOTO"
        couleurBordure="#123"
        couleurFond="red"
        couleurTexte="yellow"
      />
    </div>
  );
}

export default App;
