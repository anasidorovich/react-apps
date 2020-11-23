import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    console.log("catch");
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  throwError = () => {
    this.foo.bar = 0;
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const randomPlanetContent = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div className="app">
        <Header />
        <div className="content">
          <div className="row no-gutters">
            {randomPlanetContent}
          </div>
          <button type="button" className="btn btn-warning mb-3 mr-3" onClick={this.toggleRandomPlanet} >
            Toggle Random Planet
          </button>
          <button type="button" className="btn btn-danger mb-3" onClick={this.throwError} >
            Throw Error
                    </button>
          <PeoplePage />
          <PeoplePage />
          <PeoplePage />
        </div>
      </div>
    );
  }
}