import * as React from 'react';
import './App.css';
import Greeter from './Greeter'

import logo from './logo.svg';


let x = 1;
x = 2;
if (x === 1){
  //
}
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Greeter name={"Maurice"} />
      </div>
    );
  }
}

export default App;
