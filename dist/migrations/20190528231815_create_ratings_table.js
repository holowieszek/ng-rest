"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

async function up(knex) {
  await knex.schema.createTable('ratings', table => {
    table.increments('id').primary();
    table.string('source');
    table.string('value');
    table.integer('movie_id').unsigned().references('movies.id');
    table.timestamps();
  });
}

async function down(knex) {
  await knex.schema.dropTable('ratings');
}