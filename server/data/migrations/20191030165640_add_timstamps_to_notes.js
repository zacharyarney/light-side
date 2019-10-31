exports.up = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.dropColumns('created_at', 'updated_at');
  });
};
