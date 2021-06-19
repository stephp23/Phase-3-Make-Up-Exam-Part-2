const Router = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", async (req, res) => {
  res.send("Home route.");
});

router.post("/countries", controllers.createCountry);
router.get("/countries", controllers.findAllCountries);
router.get("/country/:id", controllers.findCountryByID);
router.patch("/country/:id", controllers.updateCountryByID);
router.delete("/country/:id", controllers.deleteCountryByID);
router.post("/recipes", controllers.createRecipe);
router.get("/recipes", controllers.findAllRecipes);
router.get("/recipe/:id", controllers.findRecipeByID);
router.get("/country-recipes/:id", controllers.findCountryRecipes);
router.patch("/recipe/:id", controllers.updateRecipesByID);
router.delete("/recipe/:id", controllers.deleteRecipesByID);


module.exports = router;