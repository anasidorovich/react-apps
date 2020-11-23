import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi/swapi';

import './people-page.css';

const Row = ({ left, right }) => {
  return (
    <div className="row no-gutters">
      {left}
      {right}
    </div>
  );
}

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (personId) => {
    this.setState({
      selectedPerson: personId
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList getData={this.swapiService.getAllPeople}
        onItemSelected={this.onPersonSelected}
        renderItem={(item) => item.name}
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }

}
