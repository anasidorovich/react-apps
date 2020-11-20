export default class SwapiService {
  _apiBase = `https://swapi.dev/api/`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error("Fail");
    }
    return await res.json();
  }

  getAllPeople() {
    return this.getResource(`people/`);
  }

  async getStarship(id) {
    const starship = await this.getResource(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  _extractId(entity) {
    const idRegexp = /\/([0-9]*)\/$/;
    return entity.url.match(idRegexp)[1];
  }

  _transformPlanet(planet) {
    const id = this._extractId(planet);
    return {
      id: id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformPerson(person) {
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

  _transformStarship(starship) {
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