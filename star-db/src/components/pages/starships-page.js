import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
  StarshipDetails,
  StarshipList
} from "../sw-components";

export default class StarshipsPage extends Component {

  state = {
    selectedItem: 13
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
          left={<StarshipList onItemSelected={this.onItemSelected} />}
          right={<StarshipDetails itemId={this.state.selectedItem} />} />
      </ErrorBoundry>
    );
  }

}
