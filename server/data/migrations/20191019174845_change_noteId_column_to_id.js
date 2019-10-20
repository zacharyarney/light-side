exports.up = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.renameColumn('noteId', 'id');
  });
};

exports.down = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.renameColumn('id', 'noteId');
  });
};
