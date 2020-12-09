import React from 'react';
import PropTypes from "prop-types";

import './item-list.css';

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li key={id} className="list-group-item list-group-item-action"
        onClick={() => onItemSelected(id)}>{label}</li>
    );
  });

  return (
    <ul className="list-group pr-xl-4 pb-5 col-12 col-lg-12 col-xl-5">
      {items}
    </ul>
  );
};

ItemList.defaultProps = {
  onItemSelected: () => { }
};

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;


