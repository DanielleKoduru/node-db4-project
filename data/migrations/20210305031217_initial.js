
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.integer("recipes_id")
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.text("instructions").notNull()
        table
            .integer("step_number")
            .references("id")
            .inTable("instructions")
            .onDelete("SET NULL")

        table.integer("recipes_id")
    })

    await knex.schema.createTable("amount", (table) => {
        table.increments("id")
        table.text("amount").notNull()
        table.integer("recipes_id")
    })

    await knex.schema.createTable("recipe_ingredients", (table) => {
        table
            .integer("recipe_id")
            .notNull()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE") 

        table
            .integer("ingredient_id")
            .notNull()
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        
        table.primary(["recipe_id", "ingredient_id"]) 
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("amount")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
