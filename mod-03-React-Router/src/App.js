import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

import Home from "./Home";
import Pier from "./Pier";
import Cat from "./Cat";
import NotFound from "./NotFound";

class App extends Component {
  notBound() {
    this.setState({});
  }

  isBound = () => {
    this.setState({});
  };

  render() {
    // comst alsoBound = this.notBound.bind(this)
    return (
      <HashRouter>
        <div className="App">
          <header>
            <Link to="/">Home</Link>
            &nbsp;
            <Link to="/pier">Pier</Link>
            &nbsp;
            <Link to="/cat">Cat</Link>
            &nbsp;
            <Link to="/cats/zorro">Zorro</Link>
            &nbsp;
            <Link to="/cats/Diego">Diego</Link>
          </header>
          {/* <Home /> */}
          <Switch>
            <Route path="/pier" component={Pier} />
            <Route path="/cat" component={Cat} />
            <Route path="/cats/:catName" component={Cat} />

            <Route path="/" exact component={Home} />
            {/* <Route component={NotFound} /> */}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
