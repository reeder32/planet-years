import Planet from '../src/planet.js';

describe('Planet', () => {
  let planet;
  beforeEach(() => {
    planet = new Planet(1);
  })
  test('it should take a number and convert it to the number of years for that planet', () => {
    planet.convertNumberToYears(2.5);
    expect(2.5);
  })
})