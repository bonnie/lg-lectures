// tests for shopping list CLI app
const fs = require('fs')
const { expect, assert } = require('chai')
const { exec } = require('child_process')
const { getShoppingList } = require('./commands.js')
const { LISTFILE } = require('./shopping_list.js')

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

describe('reading/writing LISTFILE', () => {
  beforeEach(() => {
    fs.unlinkSync(LISTFILE)
  })
  it('creates json storage file if it doesn\'t exist', () => {
    getShoppingList()
    assert(fs.existsSync(LISTFILE))
  })
})
