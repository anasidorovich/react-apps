import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import {
  PersonDetails,
  PersonList
} from "../sw-components";

const PeoplePage = ({ match, history }) => {
    return (
      <ErrorBoundry>
        <Row
          left={<PersonList onItemSelected={ (id) => history.push(id) } />}
          right={<PersonDetails itemId={match.params.id} />} />
      </ErrorBoundry>
    );
}

export default withRouter(PeoplePage);
