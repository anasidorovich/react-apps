import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
  PersonDetails,
  PersonList
} from "../sw-components";

export default class PeoplePage extends Component {

  state = {
    selectedItem: 1
  };

  onItemSelected = (itemId) => {
    this.setState({
      selectedItem: itemId
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <Row
          left={<PersonList onItemSelected={this.onItemSelected} />}
          right={<PersonDetails itemId={this.state.selectedItem} />} />
      </ErrorBoundry>
    );
  }

}
