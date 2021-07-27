import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/style.css";
import AppContextProvider from "./contexts/appContext/appContext";
import Header from "./parts/Header/header";
import Routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <div id="app">
          <Header />
          <Routes />
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
