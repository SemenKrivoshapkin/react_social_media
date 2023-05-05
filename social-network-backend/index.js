const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const helloRouter = require('./router/auth')

app.use(cors())
app.use(bodyParser.json())
app.use('/auth',helloRouter)

const mongoURL = "mongodb+srv://cemehykt:l3YvtWn8PjCVXqew@cluster0.qmo0lks.mongodb.net/social-network"

mongoose.connect(mongoURL).then(() => {
    console.log('connected');
})

app.listen(8000, 'localhost', () => {
    console.log('Server started on 8000');
})

