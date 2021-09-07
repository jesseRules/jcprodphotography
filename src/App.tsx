import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import HeaderBar from "./components/HeaderBar/HeaderBar";
import { NFooter } from "./components/NFooter/NFooter";
import MainGallery from "./components/MainGallery/MainGallery";
import Pricing from "./components/Pricing/Pricing";

class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className="App">
        <div className="navmenu">
          <HeaderBar />
        </div>
        <div className="App-Content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/gallery" component={MainGallery} />
            <Route path="/pricing" component={Pricing} />
            <Redirect to="/" />
          </Switch>
        </div>
        <div>
          <NFooter />
        </div>
      </div>
    );
  }
}

export default App;
