
const schedulingService = {
    getScheduling(db, usuario_id){
        return db.select('agendamento_id', 'usuario_id', 'data', 'hora', 'serviço', 'celular', 'email', 'cancelado')
                .from('user_scheduling').where('cancelado', false).where('usuario_id', usuario_id).orderBy('agendamento_id')
    },
    getDateScheduling(db, date){
        return db.from('user_scheduling').select('hora')
        .where("data", date).where('cancelado', false).orderBy('hora')
    },
    postScheduling(db, schedulin){
        return db.insert(schedulin).into('user_scheduling')
    },
    cancellationScheduling(db, agendamento_id){
        return db('user_scheduling').update('cancelado', true)
                .where({agendamento_id: agendamento_id})
    }
}

module.exports = schedulingService