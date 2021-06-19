const db = require('../db')
const Country = require('../models/country');
db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const countries = [{
      country_name: 'India'
    },
    {
      country_name: 'Bangladesh'
    },
    {
      country_name: 'Italy'
    },
    {
      country_name: 'Turkey'
    },
  ]
  await Country.insertMany(countries)
  console.log('Created Countries')
}
const run = async () => {
  await main()
  db.close()
}
run()