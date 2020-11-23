import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {
  state = {
    personId: null,
    showRandomPlanet: true,
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  onItemSelected = (personId) => {
    this.setState({
      personId: personId
    })
  }

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
          <button type="button" className="btn btn-warning mb-3" onClick={this.toggleRandomPlanet} >
            Toggle Random Planet
          </button>
          <div className="row no-gutters">
            <ItemList onItemSelected={this.onItemSelected} />
            <PersonDetails personId={this.state.personId} />
          </div>
        </div>
      </div>
    );
  }
}