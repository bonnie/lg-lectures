// helper functions for shopping_list.js
const fs = require('fs')
const { LISTFILE } = require('./shopping_list.js')

/**
 * get a object of current shoping list from file.
 * keys: stores, values: Array of items
 * @returns {object} Object representing JSON stored in list.json
*/
function getShoppingList() {
  if (!fs.existsSync(LISTFILE)) {
    fs.writeFileSync(LISTFILE, JSON.stringify({}))
  }
}

module.exports = {
  getShoppingList,
}
