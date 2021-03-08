
exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ id: 1, name: "chicken curry" },
		{ id: 2, name: "burgers" },
	])
}
