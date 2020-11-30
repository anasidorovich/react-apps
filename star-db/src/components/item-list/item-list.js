import React from 'react';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi/swapi';

import './item-list.css';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <a href="#" key={id} className="list-group-item list-group-item-action"
        onClick={() => onItemSelected(id)}>{label}</a>
    );
  });

  return (
    <div className="list-group pr-xl-4 pb-5 col-12 col-lg-12 col-xl-5">
      {items}
    </div>
  );

};

const { getAllPeople } = new SwapiService();

export default ItemList;


