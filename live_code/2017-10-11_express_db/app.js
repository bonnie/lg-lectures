const express = require('express')
const { getPetsAndSpecies } = require('./db/db.js')

const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
  // const pets = [
  //   { name: 'Astro', species_name: 'dog' },
  //   { name: 'Hobbes', species_name: 'tiger' },
  //   { name: 'Crookshanks', species_name: 'cat' },
  // ]
  getPetsAndSpecies()
    .then((pets) => {
      res.render(
        'pets',
        { pets },
      )
    })
    .catch(console.error)
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
)
