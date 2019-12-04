exports.seed = function(knex) {
  // Deletes ALL existing entries
  let tables = ['comments', 'notes', 'users'];

  console.log('RESET RUNS')

  tables.forEach((table) => {
    console.log('TRUNCATING ', table);
    knex(table).truncate()
  });
};
