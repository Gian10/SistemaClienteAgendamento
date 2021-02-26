const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const { authSecret } = require('../.env')

const loginService = require('../services/loginService')

const crypto = require('crypto');
const secret = 'appSecretKey';
const rounds = 9921;
const keySize = 32;
const algorithm = 'aes-256-cbc';
const salt = crypto.createHash('sha1').update(secret).digest("hex");

function decryptData(encData) {
    try {
        let textParts = encData.split(':');
        let iv = Buffer.from(textParts.shift(), 'base64');
        let encryptedData = Buffer.from(textParts.join(':'), 'base64');
        let key = crypto.pbkdf2Sync(secret, salt, rounds, keySize, 'sha512');
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
        let decryptedData = decipher.update(encryptedData);
        decryptedData = Buffer.concat([decryptedData, decipher.final()]);
        return JSON.parse(decryptedData.toString());
    }
    catch (err) {
        console.error(err)
        return false;
    }
}

router.route('/login')
    .post((req, res) => {
        const db = req.app.get('db')
        loginService.loginUser(db, req.body)
            .then(user => {
                if (user.length === 0)
                    return res.status(400).send({message: 'NOME INVÁLIDO', statusCode: 400})

                const passportDescrypt = decryptData(user[0].senha)
                const passportBody = req.body.senha

                if (passportDescrypt != passportBody) {
                    return res.status(400).send({message: 'SENHA INVÁLIDA', statusCode: 400})
                }

                const dateNowSeconds = Math.floor(Date.now() / 1000)

                // iat: emitido em   
                const playload = {
                    idUser: user[0].id,
                    name: user[0].nome,
                    email: user[0].email,
                    iat: dateNowSeconds,
                    exp: dateNowSeconds + (60 * 60 * 24 * 2)
                    // exp: dateNowSeconds + 100
                }

                res.json({ ...playload, token: jwt.encode(playload, authSecret) })

            })
            .catch(_ => res.status(400).send({message: 'ERRO AO LOGAR', statusCode: 400}))
    })

router.route('/informationToken')
    .post((req, res) => {
        const userData = req.body
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                return res.status(200).send(token)
            }
        } catch (e) {
        }
        return res.status(401).send({message: 'NÃO AUTORIZADO. TOKEN EXPIRADO', statusCode: 401})
    })

module.exports = router