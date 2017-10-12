const { db } = require('../../db/db')
// const { exec } = require('child_process');

/**
 * Truncate all tables in the db
 * @return {Promise} - Promise resolves to list of results from truncate queries
 */
const initDB = () => {
  const tables = ['species', 'pets', 'petowners', 'owners']
  return Promise.all(tables.map(table =>
    db.any(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`),
  ),
  ).catch(console.error)
}

/**
 * Add seed data to DB
 * @return {Promise} - Promise that resolves to result of last insert query
 */
const seedDB = () =>
  // exec('psql pets_test < db/seed.sql', (error, stdout, stderr) => {
  //   if (error) console.error(error)
  //   if (stdout) console.log(stdout)
  //   if (stderr) console.log(stderr)
  // })
  db.any('INSERT INTO species (species_name) VALUES ($1)', ['dog'])
    .then(() => db.any('INSERT INTO pets (name, species_id) VALUES ($1, $2)', ['Astro', 1]))
    .catch(console.error)

const resetDB = () => initDB().then(seedDB)

module.exports = { resetDB }
