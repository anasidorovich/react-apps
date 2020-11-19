import React, { Component } from 'react';

import './starship-details.css';

export default class StarshipDetails extends Component {

  render() {
    return (
      <div className="random-planet-card col col-lg-12 col-xl-6">
        <div className="card mb-3">
          <div className="card-image">
            <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" />
          </div>
          <div className="card-main-info">
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

