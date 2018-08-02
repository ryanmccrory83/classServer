
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {first: 'James', last: 'Schultz', img: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg', homeTown: 'Alabama',},
        {first: 'Courtney', last: 'Hammond', img: 'https://i.pinimg.com/736x/d9/65/14/d96514f3952bb90c33c5005b8456ae1a--cats-in-costumes-happy-easter.jpg', homeTown: 'San Diego',},
        {first: 'Buster', last: 'Jenkins', img: 'https://i.pinimg.com/736x/d9/65/14/d96514f3952bb90c33c5005b8456ae1a--cats-in-costumes-happy-easter.jpg', homeTown: 'Mars',}
      ]);
    });
};
