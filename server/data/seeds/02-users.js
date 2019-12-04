exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'zach', password: 'password' },
        { username: 'rigby', password: 'password' },
        { username: 'sandy', password: 'password' },
        { username: 'dano', password: 'password' },
      ]);
    });
};
