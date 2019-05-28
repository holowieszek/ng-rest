export async function up(knex) {
  await knex.schema.createTable('movies', table => {
    table.increments('id').primary();
    table.string('title');
    table.string('year');
    table.string('rated');
    table.string('released');
    table.string('runtime');
    table.string('genre');
    table.string('director');
    table.string('writer');
    table.string('actors');
    table.string('plot');
    table.string('language');
    table.string('country');
    table.string('awards');
    table.string('poster');
    table.string('metascore');
    table.string('imdbrating');
    table.string('imdbvotes');
    table.string('imdbid');
    table.string('type');
    table.string('dvd');
    table.string('boxoffice');
    table.string('production');
    table.string('website');
    table.timestamps();
  });
}

export async function down(knex) {
  await knex.schema.dropTable('movies');
}
