exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw('TRUNCATE TABLE notes RESTART IDENTITY CASCADE')
    .then(function() {
      // Inserts seed entries
      return knex('notes').insert([
        {
          noteTitle: 'Hello, World!',
          noteBody: 'This is the first entry in the database!',
          user_id: 1,
        },
        {
          noteTitle: 'Second Note',
          noteBody: 'This is the second entry in the database!',
          user_id: 1,
        },
        {
          noteTitle: 'Lucky Number Three!',
          noteBody: 'This is the third entry in the database!',
          user_id: 2,
        },
        {
          noteTitle: 'Four Friends is a Great Number of Friends!',
          noteBody: 'This is the fourth entry in the database!',
          user_id: 3,
        },
        {
          noteTitle: 'High Five!',
          noteBody: 'This is the fifth entry in the database!',
          user_id: 2,
        },
      ]);
    });
};
