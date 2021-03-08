
exports.seed = async function(knex) {
	await knex("instructions").insert([
		{ id: 1, instructions: "add all ingredients to a skillet and cook on low for an hour", step_number: 1, recipe_id: 1 },
		{ id: 2, instructions: "grill burger on low, prepare toppings, assemble", step_number: 2, recipe_id: 2 },
	])
}

