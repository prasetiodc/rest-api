require('dotenv').config()

const express = require('express')
const user = require('./route/user')
const sign = require('./route/api')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
let app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/users', user)
app.use('/api', sign)

app.listen(port, ()=>{
    console.log(`SERVER RUNNING ON ${port}`);
})