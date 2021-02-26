const express = require('express')
const router = express.Router()

const userService = require('../services/userService')
const schedulingService = require('../services/schedulingService')
const passport = require('../config/passport')()

router.route('/scheduling')
    .all(passport.authenticate())
    .get((req, res)=>{
        const db = req.app.get('db')
        schedulingService.getScheduling(db, req.query.usuario_id)
        .then(schedulin => res.status(200).send(schedulin))
        .catch(_ => res.status(404).send({message: 'ERRO AO BUSCAR AGENDAMENTO', statusCode: 404}))
    })

    .post(async(req, res) =>{
        const db = req.app.get('db')
        const userScheduling = { ...req.body}

        const userId = await userService.getUserId(db, userScheduling.usuario_id)
        let celular = userId[0].celular
        let email = userId[0].email
        userScheduling['celular'] = celular
        userScheduling['email'] = email
        userScheduling['cancelado'] = false

        schedulingService.postScheduling(db, userScheduling)
        .then(_ => res.status(201).send({message: 'SALVO!', statusCode: 201}))
        .catch(_ => res.status(400).send({message: 'ERRO AO SALVAR!', statusCode: 400}))
    })

    router.route('/scheduling/:data')
        .all(passport.authenticate())
        .get((req, res)=>{
            const db = req.app.get('db')
            schedulingService.getDateScheduling(db, req.params.data)
            .then(hora => res.status(201).send(hora))
            .catch(_ => res.status(404).send({message: 'ERRO AO REALIZAR BUSCA!', statusCode: 404}))
        })

    router.route('/scheduling/cancelar/:id')
        .all(passport.authenticate())
        .put((req, res)=>{
            const db = req.app.get('db')
            schedulingService.cancellationScheduling(db, req.params.id)
            .then(_ => res.status(201).send({message: 'CANCELADO COM SUCESSO!', statusCode: 201}))
            .catch(_ => res.status(400).send({message: 'ERRO AO CANCELAR!', statusCode: 400}))
        })

    module.exports = router