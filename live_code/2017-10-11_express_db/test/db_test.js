const expect = require('chai').expect
const { getPetsAndSpecies } = require('../db/db')
const { resetDB } = require('./utilities/dbUtilities')

describe('getPetsAndSpecies()', () => {
  beforeEach('reset the db', resetDB)
  it('returns the correct number of results', () =>
    getPetsAndSpecies().then(results =>
      expect(results.length).to.equal(1),
    ),
  )
})
