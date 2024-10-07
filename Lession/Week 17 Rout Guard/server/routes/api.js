const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const router = express.Router()

const db ="mongodb://localhost:27017/articledb"

router.use(cors());

router.get('/',(req, res) =>{
    res.send('Response from API route')
})

mongoose.connect(db)
.then(res =>{
    console.log("Connection successfully to db")
}).catch(err =>{
    console.error("Connection Error")
})

// create POST Api 

router.post('/register', (req, res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save().then(registeredUser =>{
        let payload = {subject: registeredUser.username};
        let token = jwt.sign(payload, 'mySecreatKey');
        res.status(200).send({token})
    }).catch(err =>{
        console.error(err)
    })
})

router.post('/login',(req, res) =>{
    let userData = req.body
    User.findOne({username: userData.username}).then(user =>{
        if(!user){
            res.status(401).send("Invalid username")
        }else{
            if(user.password !== userData.password){
                res.status(401).send("Invalid Password")
            }else{
                let payload = {subject: user.username};
                let token = jwt.sign(payload, 'mySecreatKey');
                res.status(200).send({token})
            }
        }
    }).catch(err =>{
        console.error(err)
    })
})

router.get('/articles',(req,res)=>{
    let articles = [
        {
            "id":1,
            "title":"Concert at Beach 1",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        },
        {
            "id":2,
            "title":"Concert at Beach 2",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        },
        {
            "id":3,
            "title":"Concert at Beach 3",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        },
        {
            "id":4,
            "title":"Concert at Beach 4",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        }
    ]
    res.json(articles)
})

router.get('/paid_articles',verifyToken,(req,res)=>{
    let paid_articles = [
        {
            "id":5,
            "title":"Concert at Beach 5 paid",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        },
        {
            "id":6,
            "title":"Concert at Beach 6 paid",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        },
        {
            "id":7,
            "title":"Concert at Beach 7 paid",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        },
        {
            "id":8,
            "title":"Concert at Beach 8 paid",
            "description": "article take place in Takeo",
            "date":"2023-08-23"
        }
    ]
    res.json(paid_articles)
})

// create function : middleware 

function verifyToken(req, res, next){
    // check header Authorization 
    let authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).send("Unauthorized Request[No Authorization Header]")
    }

    // check Token 
    let token = authorization.split(" ")[1]

    console.log("======================")

    console.log(token)

    console.log("======================")
    if(token === undefined){
        return res.status(401).send("Unauthorized Request [No Token]")
    }

    // verify Token 
    let payload = jwt.verify(token,'mySecreatKey')
    if(!payload){
        return res.status(401).send("Unauthorized Request [Token No Valid]")
    }


    // assign request = payload (information)

    req.userId = payload.subject;
    //subject we get from : let payload = {subject: registeredUser.username};
    next();

}


module.exports = router