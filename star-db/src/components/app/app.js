import React, { Component } from 'react';
import Row from '../row';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi/swapi';
import {
  PlanetDetails,
  PersonDetails,
  StarshipDetails,
  PlanetList,
  PersonList,
  StarshipList
} from "../sw-components";

import './app.css';


export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
    selectedItem: 1
  };

  onItemSelected = (itemId) => {
    this.setState({
      selectedItem: itemId
    });
  };


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
          <ErrorBoundry>
            <div className="row no-gutters">
              <PersonList onItemSelected={this.onItemSelected} >
                {({ name }) => <span> {name} </span>}
              </PersonList>
              <PersonDetails id={this.state.selectedItem} />
            </div>
          </ErrorBoundry>
        </div>
      </div>
    );
  }
}