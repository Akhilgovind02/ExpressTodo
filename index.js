const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const connectDb = require('./config/db')
const authRouter = require('./route/auth')
const PORT = process.env.PORT || 5000
connectDb()


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')


// app.use('/',(req,res) => {
//     res.send('server is running')
// })


app.use('/auth',authRouter)


app.listen((PORT),() => {
    console.log(`server is running on port ${PORT}`)
})


