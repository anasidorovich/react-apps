import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi/swapi';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor() {
    super();
    this.updatePlanet();
  }

  state = {
    planet: {
      id: null,
      name: '',
      population: null,
      rotationPeriod: null,
      diameter: null
    }
  }

  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {

    const { planet: { id, name, population, rotationPeriod, diameter } } = this.state;

    return (
      <div className="random-planet-card w-100">
        <div className="card mb-5">
          <div className="card-image">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} width="250" />
          </div>
          <div className="card-main-info">
            <div className="card-body">
              <p className="card-text">{name}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span>Population: </span>
                <span>{population}</span>
              </li>
              <li className="list-group-item">
                <span>Rotation Period: </span>
                <span>{rotationPeriod}</span>
              </li>
              <li className="list-group-item">
                <span>Diameter: </span>
                <span>{diameter}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

