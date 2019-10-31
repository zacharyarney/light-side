exports.up = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id');
  });
};

exports.down = function(knex) {
  return knex.schema.table('notes', (table) => {
    table.dropColumn('user_id');
  });
};
