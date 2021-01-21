import React, { Component } from 'react';
import ErrorBoundry from '../error-boundry';
import { withRouter } from 'react-router-dom';
import {
  StarshipList
} from "../sw-components";

const StarshipsPage = ({ history }) => {
    return (
      <ErrorBoundry>
        <StarshipList onItemSelected={ (id) => history.push(id) } />
      </ErrorBoundry>
    );
};

export default withRouter(StarshipsPage);