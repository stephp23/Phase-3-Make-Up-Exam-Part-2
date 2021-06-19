const Country = require("../models/country");
const Recipe = require("../models/recipe");

// CRUD => Create, Read, Update, Delete

// Country CRUD 

// Create country
const createCountry = async (req, res) => {
  try {
    const country = await new Country(req.body);
    await country.save();

    return res.status(200).json({
      country,
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
};

// Read all countries
const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    return res.status(200).json({
      countries
    });
  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
};

// Read country by ID
const getCountryByID = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const country = await Country.findById(id);

    if (country) {
      return res.status(200).json(country);
    }

    return res.status(404).send("Country not found");
  } catch (e) {
    return res.status(404).send(`Country not found: ${e.message}`);
  }
};

// Update country by ID
const updateCountryByID = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    await Country.findByIdAndUpdate(id, req.body, {
      new: true
    }, (err, country) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!country) {
        res.status(404).send("Country not found.");
      }

      return res.status(200).json(country);
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

// Delete country by ID
const deleteCountryByID = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const deletedCountry = await Country.findByIdAndDelete(id);

    if (deletedCountry) {
      return res.status(200).send("Country successfully deleted");
    }

    throw new Error("Country not found.");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};



// Recipe CRUD 

// Create recipe
const createRecipe = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    const countryId = await Recipe.find({
      country_id: id
    });

    if (countryId) {
      const newRecipe = await new Recipe(req.body);
      await newRecipe.save();
      return res.status(201).json({
        newRecipe,
      });
    }
  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
};
// Read all recipes
const getAllRecipes = async (req, res) => {
  try {
    const resp = await Recipe.find();
    return res.status(200).json({
      resp
    });
  } catch (e) {
    res.send(500).json({
      error: e.message
    });
  }
};

// Read recipe by ID
const getRecipeByID = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const respe = await Recipe.findById(id);

    if (respe) {
      return res.status(200).json(respe);
    }

    return res.status(404).send("Recipe not found");
  } catch (e) {
    return res.status(404).send(`Recipe not found: ${e.message}`);
  }
};

// Read recipes by country ID
const getCountryRecipes = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const allCountryRecipes = await Recipe.find({
      country_id: id
    });

    console.log(`Here are the recipes by country:`, allCountryRecipes);

    return res.status(200).send(allCountryRecipes);
  } catch (e) {
    return res.status(500).send("No countries were found.");
  }
};


// Update recipes by ID
const updateRecipesByID = async (req, res) => {
  try {
    const {
      id
    } = req.params;

    await Recipe.findByIdAndUpdate(id, req.body, {
      new: true
    }, (err, recipes) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!recipes) {
        res.status(404).send("Recipe not found.");
      }

      return res.status(200).json(recipes);
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

// Delete recipes by ID
const deleteRecipesByID = async (req, res) => {
  const {
    id
  } = req.params;
  try {
    const deletedRecipes = await Recipes.findByIdAndDelete(id);

    if (deletedRecipes) {
      return res.status(200).send("Recipes successfully deleted");
    }

    throw new Error("Recipes not found.");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  createCountry,
  getAllCountries,
  getCountryByID,
  updateCountryByID,
  deleteCountryByID,
  createRecipe,
  getAllRecipes,
  getRecipeByID,
  getCountryRecipes,
  updateRecipesByID,
  deleteRecipesByID,

};