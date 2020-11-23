import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
  state = {
    personId: null
  }

  onItemSelected = (personId) => {
    this.setState({
      personId: personId
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <div className="row no-gutters">
            <RandomPlanet />
          </div>
          <div className="row no-gutters">
            <ItemList onItemSelected={this.onItemSelected} />
            <PersonDetails personId={this.state.personId} />
          </div>
        </div>
      </div>
    );
  }
}