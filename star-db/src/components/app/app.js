import React, { Component } from 'react';
import Row from '../row';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi/swapi';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();
  
  state = {
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
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
    const { getPerson, getPersonImage, getStarship, getStarshipImage } = this.swapiService;

    const randomPlanetContent = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const personDetails = (
      <ItemDetails getData={getPerson} getImage={getPersonImage} itemId={7} />
    );
    const starshipDetails = (
      <ItemDetails getData={getStarship} getImage={getStarshipImage} itemId={5} />
    );
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
          <ErrorBoundry>
            <Row left={personDetails} right={starshipDetails} />
          </ErrorBoundry>
        </div>
      </div>
    );
  }
}