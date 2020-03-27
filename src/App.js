import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Routes/Landing/Landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={'/'} component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
