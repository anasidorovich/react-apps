import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';

export default class PeoplePage extends Component {
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
    return (
      <div className="row no-gutters">
        <ItemList onItemSelected={this.onPersonSelected} />
        <PersonDetails personId={this.state.selectedPerson} />
      </div>
    );
  }

}
