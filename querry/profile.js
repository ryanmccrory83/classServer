const pg = require('../db/connection')

listAllProfiles = () => {
    return pg('class_directory')
        .select()
        .from('profiles')
        .orderBy('id', 'desc')
}
listOneProfile = (id) => {
    return pg('class_directory')
        .select()
        .from('profiles')
        .where('id',id)
}
module.exports = { 
    listAllProfiles,
    listOneProfile
}