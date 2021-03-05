exports.seed = async function(knex) {
	await knex("amount").insert([   
		{ amount: "1 tsp", recipes_id: 1},
    { amount: "1 lb", recipes_id: 2 },
    { amount: "1/2 tsp", recipes_id: 2 },
    { amount: "1 cup", recipes_id: 2 },
	])
}
