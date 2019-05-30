import knexJS from 'knex';
import bookshelfJS from 'bookshelf';

import knexConfig from './knexconfig';

// Connection
const knex = knexJS(knexConfig);
const bookshelf = bookshelfJS(knex);

bookshelf.plugin(['pagination']);

export default bookshelf;
