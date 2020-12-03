import React, { Component } from 'react';
import {
  SwapiServiceConsumer
} from "../swapi-service-context";

const withSwapiService = (Wrapped, mapToProps) => {
  return (props) => {
      return (
        <SwapiServiceConsumer>
        {
         (swapiService) => {
            const swapiProps = mapToProps(swapiService);
            return (
              <Wrapped {... props} { ...swapiProps } swapiService={swapiService} />
            );
         }
        }
       </SwapiServiceConsumer>
       );
  }
}

export default withSwapiService;