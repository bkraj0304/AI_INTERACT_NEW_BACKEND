
var userRegisterDBController = require('../helpers/userRegisterDB');

module.exports = async function (req, res, next) {
    const {username,email,password,gender} = req.body; 
    // console.log("userRegisterDBController",req.body);
        var newMember = {
        userName: username,
        userEmail: email,
        userPassword: password,
        userGender: gender,
    };

    

    // console.log("newMember",newMember);
    let message = await userRegisterDBController(newMember);
    // console.log("userRegisterController",message);
    res.send(message);
}
