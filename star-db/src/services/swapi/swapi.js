import defaultImage from './big-placeholder.jpg';

export default class SwapiService {
  _apiBase = `https://swapi.dev/api/`;
  _imgUrl = `https://starwars-visualguide.com/assets/img/`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error("Fail");
    }
    return await res.json();
  }

  async getImageResource(id, entity) {
    const res = await fetch(`${this._imgUrl}${entity}/${id}.jpg`);
    if (!res.ok) {
      //throw new Error("Fail");
      return defaultImage;
    }
    return res.url;
  }

  getAllPeople = async () => {
    const res = await this.getResource(`people/`);
    return res.results.map(this._transformPerson);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`starships/`);
    return res.results.map(this._transformStarship);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`starships/`);
    return res.results.map(this._transformPlanet);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}/`);
    planet.img = await this.getImageResource(id, "planets");
    return this._transformPlanet(planet);
  }

  getPersonImage = (id) => {
    return `${this._imgUrl}characters/${id}.jpg`;
  }

  getStarshipImage = (id) => {
    return `${this._imgUrl}starships/${id}.jpg`;
  }

  _extractId(entity) {
    const idRegexp = /\/([0-9]*)\/$/;
    return entity.url.match(idRegexp)[1];
  }

  _transformPlanet = (planet) => {
    const id = this._extractId(planet);
    return {
      id: id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      img: planet.img
    }
  }

  _transformPerson = (person) => {
    const id = this._extractId(person);
    return {
      id: id,
      name: person.name,
      height: person.height,
      mass: person.mass,
      hairColor: person.hair_color,
      skinColor: person.skin_color,
      eyeColor: person.eye_color,
      birth: person.birth_year,
      gender: person.gender
    }
  }

  _transformStarship = (starship) => {
    const id = this._extractId(starship);
    return {
      id: id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      cost: starship.cost_in_credits,
      length: starship.length,
      speed: starship.max_atmosphering_speed,
      crew: starship.crew,
      passengers: starship.passengers,
      capacity: starship.cargo_capacity,
      consumables: starship.consumables,
      hyperdriveRating: starship.hyperdrive_rating,
      mglt: starship.MGLT,
      starshipClass: starship.starship_class
    }
  }
}