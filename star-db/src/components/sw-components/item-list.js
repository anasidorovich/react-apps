import React from "react";
import ItemList from "../item-list";
import { withData } from '../hoc-helpers';
import { withSwapiService } from "../hoc-helpers";

const itemListWithChildren = (Wrapped, fn) => {
  return (props) => {
      return (
        <Wrapped {... props} >
          {fn}
        </Wrapped>
      );
  }
}

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

const PlanetList = withSwapiService(
                     withData(itemListWithChildren(ItemList, renderPersonChildren)),
                     mapPlanetsToProps);
const PersonList = withSwapiService(
                     withData(itemListWithChildren(ItemList, renderPersonChildren)),
                     mapPeopleToProps);
const StarshipList = withSwapiService(
                     withData(itemListWithChildren(ItemList, renderStarshipChildren)),
                     mapStarshipsToProps);

export {
  PlanetList,
  PersonList,
  StarshipList
}