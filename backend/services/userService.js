

const UserService = {
    getUser(db){
        return db.select('id', 'nome', 'email', 'senha', 'data_nascimento', 'celular')
        .from("users").orderBy('id')
    },

    postUser(db, user){
        return db.insert(user).into('users')
    },
    
    getUserId(db, id){
        return db.from('users').select('id', 'nome', 'email', 'senha', 'data_nascimento', 'celular').where("id", id)
    },

    updateUser(db, user, id){
        return db('users').where({id: id}).update(user)
    },

    deleteUser(db, id){
        return db('users').where({id}).delete()
    }
}


module.exports = UserService