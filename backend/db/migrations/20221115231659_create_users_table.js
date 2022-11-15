/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("image_url");
    table.string("video_url");
    table.string("is_land").defaultTo("false");
    table.string("is_sea").defaultTo("false");
    table.string("is_sky").defaultTo("false");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("items");
  
};
