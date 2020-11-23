import React, { Component } from 'react';
import SwapiService from '../../services/swapi/swapi';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  }

  updatePerson = () => {
    const id = this.props.personId;
    if (!id) {
      return;
    }
    this.setState({
      loading: true
    })
    this.swapiService
      .getPerson(id)
      .then((person) => this.setState({
        person, loading: false
      }));
    //.catch(this.onError);
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }

  render() {
    if (!this.state.person) {
      return (
        <div className="person-details-card col col-lg-12 col-xl-7">
          <div className="card">
            <div className="card-main-info">
              <div className="card-body">
                <p className="card-text">Please select a person</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { loading } = this.state;
    const { id, name, eyeColor, birthYear, gender } = this.state.person;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="person-details-card col col-lg-12 col-xl-7">
        <div className="card mb-3">
          <div className="card-image">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
          </div>
          <div className="card-main-info">
            <div className="card-body">
              <p className="card-text">{name}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Birth Year: {birthYear}</li>
              <li className="list-group-item">Eye Color(s): {eyeColor}</li>
              <li className="list-group-item">Gender: {gender}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
