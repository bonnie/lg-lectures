// Test supporting commands for shopping list scripts
const fs = require('fs')
const { assert } = require('chai')
const { getShoppingList } = require('../commands')
const { LISTFILE } = require('../shopping_list')

describe('file read/write', function () {
  beforeEach(() => {
    if (fs.existsSync(LISTFILE)) fs.unlinkSync(LISTFILE)
  })
  it('Creates the file if it does not exist', () => {
    getShoppingList()
    assert(fs.existsSync(LISTFILE))
  })
})
