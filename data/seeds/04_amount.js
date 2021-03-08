exports.seed = async function(knex) {
	await knex("amount").insert([   
		{ id: 1, amount: "1 tsp", recipe_id: 1},
    { id: 2, amount: "1 lb", recipe_id: 2 },
    { id: 3, amount: "1/2 tsp", recipe_id: 2 },
    { id: 4, amount: "1 cup", recipe_id: 2 },
	])
}
