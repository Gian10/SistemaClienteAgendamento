const express = require("express")
const app = express()


const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors())

 const db = require('./config/db')

 const userRouter = require('./routes/user')
 const loginRouter = require('./routes/login')
 const schedulingRouter = require('./routes/scheduling')

 app.set("db", db)


 app.use(userRouter)
 app.use(loginRouter)
 app.use(schedulingRouter)


app.listen(process.env.PORT | 8080, () => {
    console.log("Executando, port: " + process.env.PORT | 8080);
})

module.exports = app