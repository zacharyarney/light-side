exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw('TRUNCATE TABLE comments RESTART IDENTITY CASCADE')
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([
        {
          commentBody: 'Wow, really great content here!',
          user_id: 2,
          note_id: 1,
        },
      ]);
    });
};
