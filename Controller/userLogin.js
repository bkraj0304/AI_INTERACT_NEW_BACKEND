var userLoginDBController = require('../helpers/userLoginDB');


module.exports = async function (req, res, next){
    const {username,password} = req.body; 
    
    console.log(req.body);
        var newLogin = {
        userName: username,
        userPassword: password,
    
    };
    // console.log("newMember",newLogin);
    let object_received = await userLoginDBController(newLogin);
    console.log("userLoginController",object_received);
    res.send(object_received);
}