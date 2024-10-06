const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')
const router = express.Router()

const db ="mongodb://localhost:27017/articledb"

router.get('/',(req, res) =>{
    res.send('Response from API route')
})

mongoose.connect(db)
.then(res =>{
    console.log("Connection successfully to db tesing")
}).catch(err =>{
    console.error("Connection Error")
})

// create POST Api 

router.post('/register', (req, res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save().then(registeredUser =>{
        res.status(200).send(registeredUser)
    }).catch(err =>{
        console.error(err)
    })
})


module.exports = router
