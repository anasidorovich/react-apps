import React, { Component } from 'react';
import SwapiService from '../../services/swapi/swapi';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList });
      });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <a href="#" key={id} className="list-group-item list-group-item-action"
          onClick={() => this.props.onItemSelected(id)} >{name}</a>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <div className="list-group pr-xl-4 pb-5 col-12 col-lg-12 col-xl-5">
        {items}
      </div>
    );
  }

}


