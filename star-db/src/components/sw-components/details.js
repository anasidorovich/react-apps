import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi/swapi';
import {
  SwapiServiceConsumer
} from "../swapi-service-context";
import { withSwapiService } from "../hoc-helpers";

const mapToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImage: swapiService.getPersonImage
  }
}

let PlanetDetails = ({ itemId: id, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
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

let PersonDetails = (props) => {
  console.log(props);
  return (
    <ItemDetails { ...props }>
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color(s)" />
      <Record field="gender" label="Gender" />
    </ItemDetails>
  );
}

let StarshipDetails = ({ itemId: id, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return (
    <ItemDetails
      getData={getStarship}
      getImage={getStarshipImage}
      itemId={id}>
      <Record field="b1" label="b1" />
      <Record field="b1" label="b1" />
    </ItemDetails>
  );
}
PlanetDetails = withSwapiService(PlanetDetails);
PersonDetails = withSwapiService(PersonDetails, mapToProps);
StarshipDetails = withSwapiService(StarshipDetails);
export {
  PlanetDetails,
  PersonDetails,
  StarshipDetails
}