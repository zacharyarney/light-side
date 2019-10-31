exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id');
    table.text('commentBody').notNullable();
    table.integer('user_id').unsigned();
    table.integer('note_id').unsigned();
    table.foreign('user_id').references('users.id');
    table.foreign('note_id').references('notes.id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments');
};
