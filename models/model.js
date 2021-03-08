const db = require("../data/migrations/dbConfig")

// - `getRecipes()`: should return a list of all recipes in the database.
const getRecipes = () => {
    return db("recipes")
        .select("*")
}
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
const getShoppingList = (recipe_id) => {
    return db("amount as a")
        .join("ingredients as i", "a.ingredient_id", "i.id")
        .where("a.recipe_id", recipe_id)
        .select("i.recipe_id", "a.amount", "i.name")
}
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe
const getInstructions = (recipe_id) => {
    return db("instructions")
        .where("recipe_id", recipe_id)
        .select("*")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}