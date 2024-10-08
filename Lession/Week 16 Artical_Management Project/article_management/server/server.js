const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const PORT = 3000

const app = express(); // create instance from express 

app.use(bodyParser.json());
app.use('/api' ,api)


app.get('/',function(req, res){
    res.send('Response from server')
})


app.listen(PORT, function(){
    console.log("Server is running with port: " + PORT)
})
