import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    this.props.getData()
      .then((itemList) => {
        this.setState({ itemList });
      });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <a href="#" key={id} className="list-group-item list-group-item-action"
          onClick={() => this.props.onItemSelected(id)}>{label}</a>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <div className="list-group pr-xl-4 pb-5 col-12 col-lg-12 col-xl-5">
        {items}
      </div>
    );
  }

}


