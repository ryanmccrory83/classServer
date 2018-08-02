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
createOneProfile = (post) => {
    return pg('profiles')
        .returning(['id','first','last'])
        .insert(post)
}
module.exports = { 
    listAllProfiles,
    listOneProfile,
    createOneProfile
}