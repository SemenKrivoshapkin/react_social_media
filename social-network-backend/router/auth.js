import express from 'express'
import User from '../models/auth.js'
import generate from '../utils/util.js'
import { registerValidation } from '../validations.js'
// import  { validationResult } from 'express-validator'

const router = express.Router()

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })
        if(!user){
            return res.status(404).json({
                message: "Пользователь не найден"
            })
        } 

        const token = generate(user.email, user.password)
        
        
        res.status(200).send(token)
    } catch (err) {
        console.log(err)
    }
})

router.post('/register', registerValidation, async (req, res) => {
    try {

        // const errors = validationResult(req)
        //     if(!errors.isEmpty()) {
        //         return res.status(400).json(errors.array())
        //     } 

        const {email, password, name, surName} = req.body
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
        const token = generate(email, password)
        const user = new User({ 
            email, 
            password, 
            name, 
            surName, 
         })
        
        await user.save()
        res.status(201).send(token)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        })
    }
})

export default router