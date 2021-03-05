
exports.seed = async function(knex) {
	await knex("ingredients").insert([
		{ name: "chicken" }, 
		{ name: "beef" }, 
		{ name: "tomatoes" }, 
		{ name: "salt" },
		{ name: "lettuce" }, 
		{ name: "onions" }, 
		{ name: "sesame bun" }, 
		{ name: "ketchup" },
		{ name: "cuury powder" },
    	{ name: "tumeric" },
    	{ name: "allspice powder" },
    	{ name: "serrano pepper" },
	])
}

