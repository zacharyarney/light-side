exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes')
    .truncate() // truncate resetes keys in addition to reseting the table (del)
    .then(function() {
      // Inserts seed entries
      return knex('notes').insert([
        { noteTitle: 'Hello, World!', noteBody: 'This is the first entry in the database!' },
        { noteTitle: 'Second Note', noteBody: 'This is the second entry in the database!' },
        { noteTitle: 'Lucky Number Three!', noteBody: 'This is the third entry in the database!' },
        { noteTitle: 'Four Friends is a Great Number of Friends!', noteBody: 'This is the fourth entry in the database!' },
        { noteTitle: 'High Five!', noteBody: 'This is the fifth entry in the database!' },
      ]);
    });
};
