import ItemList from "../item-list";
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi/swapi';

const swapiService = new SwapiService();
const {
  getAllPeople,
  getAllPlanets,
  getAllStartships
} = swapiService;

const PlanetList = withData(ItemList, getAllPlanets);
const PersonList = withData(ItemList, getAllPeople);
const StarshipList = withData(ItemList, getAllStartships);

export {
  PlanetList,
  PersonList,
  StarshipList
}