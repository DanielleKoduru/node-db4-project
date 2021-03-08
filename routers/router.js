const express = require("express")
const model = require("../models/model")
const router = express.Router()

//working
// get /api/recipes/
router.get("/recipes", async (req, res, next) => {
	try {
		const recipe = await model.getRecipes()
		res.status(200).json(recipe)
	} catch (err) {
		next(err)
	}
})


// get /api/recipes/:id/shoppingList
router.get("/recipes/:id/shoppingList", async (req, res, next) => {
	try {
		const shoppingList = await model.getShoppingList(req.params.id)
		res.status(200).json(shoppingList)
	} catch (err) {
		next(err)
	}
})


// get /api/recipes/:id/instructions
router.get("/recipes/:id/instructions", async (req, res, next) => {
	try {
		const instructions = await model.getInstructions(req.params.id)
		res.status(200).json(instructions)
	} catch (err) {
		next(err)
	}
})


// get /api/ingredients/:id/recipes
router.get("/ingredients/:id/recipes", async (req, res, next) => {
	try {
		const recipeId = await model.findById(req.params.id)
		res.status(200).json(recipeId)
	} catch (err) {
		next(err)
	}
})

module.exports = router