import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

  render() {
    return (
      <div className="list-group col-12 col-lg-12 col-xl-6">
        <a href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
        <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
        <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
      </div>
    );
  }

}


