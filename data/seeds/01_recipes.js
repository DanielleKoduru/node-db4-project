
exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ name: "chicken curry" },
		{ name: "burgers" },
	])
}
