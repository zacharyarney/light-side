exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'zach' },
        { username: 'geoff' },
        { username: 'rigby' },
        { username: 'sandy' },
        { username: 'dano' },
      ]);
    });
};
