import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

class SwapiService {
  _apiBase = `https://swapi.dev/api/`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error("dfdf");
    }
    return await res.json();
  }

  getAllPeople() {
    return this.getResource(`people/`);
  }

  getPerson(id) {
   return this.getResource(`people/${id}/`);
  }
}

  const swapi = new SwapiService();

  swapi.getPerson(3).then((p) => {
    console.log(p.name);
  });

  swapi.getAllPeople().then((body) => {
    console.log(body);
  });

ReactDOM.render(<App />, document.getElementById("root"));