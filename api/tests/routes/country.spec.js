/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country,Activity , conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
  countries: ["ARG"],
  name: 'Voley',
  difficulty: 5,
  duration: 1,
  season: "Verano",
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});
