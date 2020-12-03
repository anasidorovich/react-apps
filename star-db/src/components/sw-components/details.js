import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi/swapi';
import {
  SwapiServiceConsumer
} from "../swapi-service-context";

const PlanetDetails = ({ id }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
      }
    </SwapiServiceConsumer>
  );
}

const PersonDetails = ({ id }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
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
      }
    </SwapiServiceConsumer>
  );

}

const StarshipDetails = ({ id }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
      }
    </SwapiServiceConsumer>
  );
}

export {
  PlanetDetails,
  PersonDetails,
  StarshipDetails
}