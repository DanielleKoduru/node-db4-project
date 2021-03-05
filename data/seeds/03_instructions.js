
exports.seed = async function(knex) {
	await knex("instructions").insert([
		{ instructions: "add all ingredients to a skillet and cook on low for an hour", recipes_id: 1 },
		{ instructions: "grill burger on low, prepare toppings, assemble", recipes_id: 2 },
	])
}

