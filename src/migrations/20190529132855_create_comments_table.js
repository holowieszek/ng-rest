export async function up(knex) {
  await knex.schema.createTable('comments', table => {
    table.increments('id').primary();
    table.string('author');
    table.longtext('comment');
    table
      .integer('movie_id')
      .unsigned()
      .references('movies.id');
    table.timestamps();
  });
}

export async function down(knex) {
  await knex.schema.dropTable('comments');
}
