import React from 'react';
import {
  SwapiServiceConsumer
} from "../swapi-service-context";

const withSwapiService = (mapToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            const swapiProps = mapToProps ? mapToProps(swapiService) : null;
            return (
              <Wrapped {...props} {...swapiProps} swapiService={swapiService} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  }
}

export default withSwapiService;