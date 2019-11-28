exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.string('password').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('password');
  });
};
