const express = require('express')

const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render(
    'pets',
    { pets: [
      { name: 'Astro', species: 'dog' },
      { name: 'Hobbes', species: 'tiger' },
      { name: 'Crookshanks', species: 'cat' },
    ],
    })
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
)
