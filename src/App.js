import React from 'react';
import './styles.scss';
import { Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={routeProps => <Home {...routeProps} />} />
        <Route
          exact
          path="/about"
          render={routeProps => <About {...routeProps} />}
        />
      </div>
    );
  }
}

export default App;
