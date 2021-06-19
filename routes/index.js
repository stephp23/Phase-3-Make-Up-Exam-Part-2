const Router = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", async (req, res) => {
  res.send("Home (starting) route.");
});

router.post("/countries", controllers.createCountry);
router.get("/countries", controllers.getAllCountries);
router.get("/country/:id", controllers.getCountryByID);
router.patch("/country/:id", controllers.updateCountryByID);
router.delete("/country/:id", controllers.deleteCountryByID);
router.post("/recipes", controllers.createRecipe);
router.get("/recipes", controllers.getAllRecipes);
router.get("/recipe/:id", controllers.getRecipeByID);
router.get("/countryrecipes/:id", controllers.getCountryRecipes);
router.patch("/recipe/:id", controllers.updateRecipesByID);
router.delete("/recipe/:id", controllers.deleteRecipesByID);


module.exports = router;