import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi/swapi';
import DummySwapiService from '../../services/swapi/dummy-swapi';
import { SwapiServiceProvider } from "../swapi-service-context";

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState((state) => {
      const Service = state.swapiService instanceof DummySwapiService ? SwapiService : DummySwapiService;
      return {
        swapiService: new Service()
      }
    });
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

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
        <Header onServiceChange={this.onServiceChange} />
        <div className="content">
          <div className="row no-gutters">
            {randomPlanetContent}
          </div>
          <button type="button" className="btn btn-danger mb-3" onClick={this.throwError} >
            Throw Error
          </button>
          <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
              <PeoplePage />
              <PlanetsPage />
              <StarshipsPage />
            </SwapiServiceProvider>
          </ErrorBoundry>
        </div>
      </div>
    );
  }
}