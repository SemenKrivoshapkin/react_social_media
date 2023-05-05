const express = require('express');
const router = express.Router()
const User = require('../models/auth')
const generate = require('../utils/util')

router.post('/login', (req, res) => {
    
})

router.post('/register', async (req, res) => {
    try {
        const {email, password, name, surName} = req.body
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
        const token = generate(email, password)
        const user = new User({ 
            email, 
            password, 
            name, 
            surName, 
            accessToken: token.accessToken,
            refreshToken: token.refreshToken,
         })
        
        await user.save()
        res.status(201).send(token)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router