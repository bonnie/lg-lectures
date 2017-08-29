// Tests for CLI functionality of shopping list script
const { exec } = require('child_process')
const { expect } = require('chai')

describe('CLI usage display', function() {
  it('should show usage when no command is supplied', (done) => {
    exec('./shopping_list.js', (err, stdout, stderr) => {
      expect(stderr).to.include('USAGE')
      done()
    })
  })
  it('should show usage when no command is supplied', (done) => {
    exec('./shopping_list.js squishy', (err, stdout, stderr) => {
      expect(stderr).to.include('USAGE')
      done()
    })
  })
})
