import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import authRouter from './router/auth.js'
import postsRouter from './router/posts.js'
import { service } from './utils/service.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/auth', service, authRouter)
app.use('/', postsRouter)
app.use('/uploads', express.static('uploads'))

const mongoURL = "mongodb+srv://cemehykt:l3YvtWn8PjCVXqew@cluster0.qmo0lks.mongodb.net/social-network"

mongoose
    .connect(mongoURL)
    .then(() => console.log('Db connected'))
    .catch((err) => console.log('Db error', err))

app.listen(8000, 'localhost', () => {
    console.log('Server started on 8000');
})

