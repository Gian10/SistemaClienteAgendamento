
exports.up = (knex) => {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email').notNull()
        table.string('senha').notNull()
        table.date('data_nascimento').notNull()
        table.string('celular').notNull()
    })
};

exports.down = (knex) => {
    return knex.schema.dropTable('users')
};
