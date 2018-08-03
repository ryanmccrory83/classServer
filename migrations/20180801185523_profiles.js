
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles',(table) =>{
        table.increments()
        table.string('firstName')
        table.string('lastName')
        table.string('photo')
        table.string('hometownLat')
        table.string('hometownLong')
        table.string('prevOccupation')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('profiles')
};
