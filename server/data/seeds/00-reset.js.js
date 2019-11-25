exports.seed = function(knex) {
  // Deletes ALL existing entries
  let tables = ['comments', 'notes', 'users'];

  tables.forEach((table) => knex(table).truncate());
};
