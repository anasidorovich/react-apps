import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildren,
  compose
} from "../hoc-helpers";

const mapPlanetsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapPeopleToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapStarshipsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const renderPersonChildren = ({ name }) => <span> {name} </span>;
const renderStarshipChildren = ({ model, name }) => <span> {name} ({model})</span>;
const PlanetList = compose(withSwapiService(mapPlanetsToProps),
  withData,
  withChildren(renderPersonChildren)
)(ItemList);
const PersonList = compose(withSwapiService(mapPeopleToProps),
  withData,
  withChildren(renderPersonChildren)
)(ItemList);
const StarshipList = compose(withSwapiService(mapStarshipsToProps),
  withData,
  withChildren(renderStarshipChildren)
)(ItemList);

export {
  PlanetList,
  PersonList,
  StarshipList
}