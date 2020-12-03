import React from "react";
import ItemList from "../item-list";
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi/swapi';

const swapiService = new SwapiService();
const {
  getAllPeople,
  getAllPlanets,
  getAllStartships
} = swapiService;

const itemListWithChildren = (Wrapped, fn) => {
  return (props) => {
      return (
        <Wrapped {... props} >
          {fn}
        </Wrapped>
      );
  }
}

const renderPersonChildren = ({ name }) => <span> {name} </span>;
const renderStarshipChildren = ({ model, name }) => <span> {name} ({model})</span>;

const PlanetList = withData(itemListWithChildren(ItemList, renderPersonChildren), getAllPlanets);
const PersonList = withData(itemListWithChildren(ItemList, renderPersonChildren), getAllPeople);
const StarshipList = withData(itemListWithChildren(ItemList, renderStarshipChildren), getAllStartships);

export {
  PlanetList,
  PersonList,
  StarshipList
}