"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

async function up(knex) {
  await knex.schema.createTable('comments', table => {
    table.increments('id').primary();
    table.string('author');
    table.text('comment');
    table.integer('movie_id').unsigned().references('movies.id');
    table.timestamps();
  });
}

async function down(knex) {
  await knex.schema.dropTable('comments');
}