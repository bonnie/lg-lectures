// tests for shopping list CLI app
const { exec } = require('child_process')
const expect = require('chai').expect

describe('CLI interface', () => {
  it('returns an error when no command is specified', (done) => {
    exec('./shopping_list.js', (err, stdout, stderr) => {
      expect(stderr).to.include('USAGE')
      done()
    })
  })
  it('returns an error when an invalid command is specified', (done) => {
    exec('./shopping_list.js squishy', (err, stdout, stderr) => {
      expect(stderr).to.include('USAGE')
      done()
    })
  })
})
