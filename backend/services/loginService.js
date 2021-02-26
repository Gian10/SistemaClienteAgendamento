

const loginService = {
   async loginUser(db, body){
        const user = await db('users').select('id','nome', 'email', 'senha').where('email', `${body.email}`)
        return user
    }
}

module.exports = loginService