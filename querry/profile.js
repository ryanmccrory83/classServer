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
        .returning(['id','firstName','lastName'])
        .insert(post)
}
updateOneProfile = (id,newPost) => {
    return pg('profiles')
        .returning(['id','firstName','lastName'])
        .update(newPost)
        .where('id',id)

}
deleteOneProfile = (id) => {
    return pg('profiles')
        .where('id',id)
        .del()
}
module.exports = { 
    listAllProfiles,
    listOneProfile,
    createOneProfile,
    updateOneProfile,
    deleteOneProfile

}