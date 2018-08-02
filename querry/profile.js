const pg = require('../db/connection')

listAllProfiles = () => {
    return pg('class_directory')
        .select()
        .from('profiles')
        .orderBy('id', 'desc')
}
module.exports = { 
    listAllProfiles
}