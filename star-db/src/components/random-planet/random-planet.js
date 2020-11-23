import React, { Component } from 'react';

import './random-planet.css';

import SwapiService from '../../services/swapi/swapi';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 2500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  state = {
    planet: {},
    loading: true,
    error: false
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !loading && !error;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PageView planet={planet} /> : null;
    const errorIndicator = error ? <ErrorIndicator /> : null;
    return (
      <div className="random-planet-card w-100">
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }

}

const PageView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, img } = planet;
  return (
    <React.Fragment>
      <div className="card mb-3">
        <div className="card-image">
          <img src={img} alt="poster" />
        </div>
        <div className="card-main-info">
          <div className="card-body">
            <p className="card-text"><span>{name}</span></p>
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
    </React.Fragment>
  );
}

