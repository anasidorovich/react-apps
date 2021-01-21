import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">Star DB</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/people/">People
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets/">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/starships/">Starships</Link>
            </li>
          </ul>
          <button type="button" className="btn btn-success mt-1" onClick={this.props.onServiceChange} >
            Change Service
          </button>
        </div>
      </nav>
    );
  }

}