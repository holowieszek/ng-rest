export async function up(knex) {
  await knex.schema.createTable('movies', table => {
    table.increments();
    table.string('name');
    table.timestamps();
  });
}

export async function down(knex) {
  await knex.schema.dropTable('movies');
}
