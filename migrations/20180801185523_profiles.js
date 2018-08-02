
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles',(table) =>{
        table.increments()
        table.string('first')
        table.string('last')
        table.string('img')
        table.string('homeTown')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('profiles')
};
