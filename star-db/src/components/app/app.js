import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import StarshipDetails from '../starship-details';

import './app.css';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <div className="row no-gutters">
            <RandomPlanet />
          </div>
          <div className="row no-gutters">
            <ItemList />
            <StarshipDetails />
          </div>
        </div>
      </div>
    );
  }
}