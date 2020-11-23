import React, { Component } from 'react';
import Row from '../row';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi/swapi';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 1
  };

  onItemSelected = (itemId) => {
    this.setState({
      selectedItem: itemId
    });
  };

  render() {
    const itemList = (
      <ItemList getData={this.swapiService.getAllPeople}
        onItemSelected={this.onItemSelected}>
        { (item) => (
          `${item.name}`
        )
        }
      </ItemList>
    );
    const { getPerson, getPersonImage } = this.swapiService;
    const itemDetails = (
      <ItemDetails
      getData={getPerson}
      getImage={getPersonImage}
      itemId={this.state.selectedItem} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }

}
