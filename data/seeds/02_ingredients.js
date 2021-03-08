
exports.seed = async function (knex) {
	await knex("ingredients").insert([
		{ id: 1, name: "chicken", recipe_id: 1 },
		{ id: 2, name: "beef", recipe_id: 2 },
		{ id: 3, name: "tomatoes", recipe_id: 1 },
		{ id: 4, name: "salt", recipe_id: 1 },
		{ id: 5, name: "lettuce", recipe_id: 2 },
		{ id: 6, name: "onions", recipe_id: 2 },
		{ id: 7, name: "sesame bun", recipe_id: 2 },
		{ id: 8, name: "ketchup", recipe_id: 2 },
		{ id: 9, name: "cuury powder", recipe_id: 1 },
		{ id: 10, name: "tumeric", recipe_id: 1 },
		{ id: 11, name: "allspice powder", recipe_id: 1 },
		{ id: 12, name: "serrano pepper", recipe_id: 1 },
	])
}

