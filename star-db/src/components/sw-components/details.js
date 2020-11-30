import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi/swapi';
const swapiService = new SwapiService();

const {
  getPlanet,
  getPerson,
  getStarship,
  getPlanetImage,
  getPersonImage,
  getStarshipImage
} = swapiService;


const PlanetDetails = ({ id }) => {
  return (
    <ItemDetails
      getData={getPlanet}
      getImage={getPlanetImage}
      itemId={id}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>

  );
}

const PersonDetails = ({ id }) => {
  return (
    <ItemDetails
      getData={getPerson}
      getImage={getPersonImage}
      itemId={id}>
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color(s)" />
      <Record field="gender" label="Gender" />
    </ItemDetails>
  );

}

const StarshipDetails = ({ id }) => {
  return (<ItemDetails
    getData={getStarship}
    getImage={getStarshipImage}
    itemId={id}>
    <Record field="b1" label="b1" />
    <Record field="b1" label="b1" />
  </ItemDetails>
  );
}

export {
  PlanetDetails,
  PersonDetails,
  StarshipDetails
}