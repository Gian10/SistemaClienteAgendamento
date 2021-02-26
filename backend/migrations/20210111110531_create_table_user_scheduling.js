
exports.up = (knex)=> {
    return knex.schema.createTable('user_scheduling', table =>{
        table.increments('agendamento_id').primary()
        table.integer('usuario_id').references('id').inTable('users').notNull()
        table.date('data').notNull()
        table.string('hora').notNull()
        table.string('serviço').notNull()
        table.string('celular').notNull()
        table.string('email').notNull()
        table.boolean('cancelado').notNull()
    })
  };
  
  exports.down = (knex)=> {
      return knex.schema.dropTable('user_scheduling')
  };
  