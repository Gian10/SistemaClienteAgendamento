
const express = require('express')
const router = express.Router()

const UserService = require('../services/userService')
const passport = require('../config/passport')()

const crypto = require('crypto');
const secret = 'appSecretKey';
const rounds = 9921;
const keySize = 32;
const algorithm = 'aes-256-cbc';
const salt = crypto.createHash('sha1').update(secret).digest("hex");

function encryptData(data) {
    try {
        let iv = crypto.randomBytes(16);
        let key = crypto.pbkdf2Sync(secret, salt, rounds, keySize, 'sha512');
        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let encryptedData = Buffer.concat([cipher.update(JSON.stringify(data)), cipher.final()]);
        return iv.toString('base64') + ':' + encryptedData.toString('base64');
    }
    catch (err) {
        console.error(err)
        return false;
    }
}

router.route("/users")
    .post((req, res) => {
        const db = req.app.get('db')
        const user = { ...req.body }
        user.senha = encryptData(req.body.senha)
        UserService.postUser(db, user)
            .then(_ => res.status(201).send({message: 'USUÁRIO SALVO COM SUCESSO!', statusCode: 201}))
            .catch(_ => res.status(400).send({message: 'ERRO AO SALVAR USUÁRIO', statusCode: 400}))
    })
    .all(passport.authenticate())
    .get((req, res) => {
        const db = req.app.get("db")
        UserService.getUser(db)
            .then(user => res.status(200).send(user))
            .catch(_ => res.status(400).send({message: 'ERRO AO BUSCAR USUÁRIO!', statusCode: 400}))
    })

router.route("/users/:id")
    .all(passport.authenticate())
    .get((req, res) => {
        const db = req.app.get('db')
        UserService.getUserId(db, req.params.id)
            .then(user => res.status(200).send(user))
            .catch(_ => res.status(404).send({message: 'ERRO AO BUSCAR USUÁRIO!', statusCode: 404}))
    })

    .put((req, res) => {
        const db = req.app.get('db')
        UserService.updateUser(db, req.body, req.params.id)
            .then(_ => res.status(204).send({message: 'USUÁRIO ATUALIZADO COM SUCESSO!', statusCode: 204}))
            .catch(_ => res.status(400).send({message: 'ERRO AO ATUALIZAR USUÁRIO!', statusCode: 400}))
    })

    .delete((req, res) => {
        const db = req.app.get('db')
        UserService.deleteUser(db, req.params.id)
            .then(_ => res.status(200).send({message: 'USUÁRIO DELETADO COM SUCESSO!', statusCode: 200}))
            .catch(_ => res.status(400).send({message: 'ERRO AO DELETAR USUÁRIO!', statusCode: 400}))
    })


module.exports = router