
exports.seed = async function(knex) {
  await knex("recipe_inggredients").truncate()
	await knex("amount").truncate()
	await knex("instructions").truncate()
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
}