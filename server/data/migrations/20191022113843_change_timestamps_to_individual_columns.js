exports.up = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.dropTimestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.timestamps(true, true);
  });
};
