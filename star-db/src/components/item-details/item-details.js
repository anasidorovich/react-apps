import React, { Component } from 'react';
import SwapiService from '../../services/swapi/swapi';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">{label}: {item[field]}</li>
  );
}

export {
Record
};

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true
  }

  updateItem = () => {
    const { itemId: id, getData} = this.props;
    if (!id) {
      return;
    }
    this.setState({
      loading: true
    })

    getData(id)
      .then((item) => this.setState({
        item, loading: false
      }));
    //.catch(this.onError);
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId ||
      prevProps.getData !== this.props.getData ||
      prevProps.getImage !== this.props.getImage) {
      this.updateItem();
    }
  }

  render() {
    if (!this.state.item) {
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
    const { item, loading } = this.state;
    const { id, name, eyeColor, birthYear, gender } = this.state.item;
    const image = this.props.getImage(id);

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="person-details-card col col-lg-12 col-xl-7">
        <div className="card mb-3">
          <div className="card-image">
            <img src={image} />
          </div>
          <div className="card-main-info">
            <div className="card-body">
              <p className="card-text">{name}</p>
            </div>
            <ul className="list-group list-group-flush">
              {
                React.Children.map( this.props.children, (child) =>  {
                   return React.cloneElement(child, {item});
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
