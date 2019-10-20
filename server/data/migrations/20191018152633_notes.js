exports.up = function(knex) {
  return knex.schema.createTable('notes', (table) => {
    table.increments('noteId');
    table
      .string('noteTitle') // length defaults to 255
      .unique()
      .notNullable();
    table.text('noteBody').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notes');
};
