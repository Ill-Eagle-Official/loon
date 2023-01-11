// Base Dependencies
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Components
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import LandPage from "./components/LandPage";
import SeaPage from "./components/SeaPage";
import SkyPage from "./components/SkyPage";
import NewItemPage from "./components/NewItemPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
    };
  }

  render() {
    return (
      <>
        <div className="App">
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/loon" element={<HomePage />} />
              <Route path="/land" element={<LandPage />} />
              <Route path="/sea" element={<SeaPage />} />
              <Route path="/sky" element={<SkyPage />} />
              <Route path="/new" element={<NewItemPage />} />
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
