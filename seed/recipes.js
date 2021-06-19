const db = require('../db')
const Country = require('../models/country')
const Recipe = require('../models/recipe');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const country = await Country.find({
    country_name: 'India'
  })
  const recipes = [{
      dish_name: 'Lamb Rogan Josh',
      country_id: country._id,
      ingredients: 'Lamb, clarified butter, yogurt, garlic, ginger, black pepper, cardamom, cloves, cinnamon, coriander, red pepper',
      image_url: 'https://bloximages.newyork1.vip.townnews.com/losaltosonline.com/content/tncms/assets/v3/editorial/3/2a/32a5f507-ffdf-54b4-aee8-1c514186fc9e/60c3f40c8de98.image.jpg?resize=280%2C272',
    },

  ]
  await Recipe.insertMany(recipes)
  console.log("Created recipes with countries")
}

const run = async () => {
  await main()
  db.close()
}

run()