const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./utilities/db'); 
var reqSend = require('./Controller/userReq');
var reqGetData= require('./Controller/userLogin');
var userRegisterController = require('./Controller/userReq');
var userLogin = require('./Controller/userLogin');

app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON request bodies

app.post('/register', userRegisterController);

app.post('/login',userLogin);

app.post('/send', reqSend);

app.get('/getData', reqGetData);


app.listen(3001, () => {
    console.log("Server running on port 3001");
});
