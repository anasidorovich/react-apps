import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
  PlanetDetails,
  PlanetList
} from "../sw-components";

export default class PlanetsPage extends Component {

  state = {
    selectedItem: 7
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
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={this.state.selectedItem} />} />
      </ErrorBoundry>
    );
  }

}
