const userDao = require('../models/userDao')

const signup = async (name, email, nickname, password) => {
    const passwordValidation = new RegExp(
        '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
        );
        if(!passwordValidation.test(password)) {
        const err = new Error('PASSWORD_INVALID');
        err.statusCode = 400;
        throw err;}

    const emailValidation = new RegExp(
        '^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        );
        if(!emailValidation.test(email)) {
        const err = new Error('EMAIL_INVALID');
        err.statusCode = 400;
        throw err;}
    
    const signup = await userDao.signup(
        name, 
        email, 
        nickname, 
        password
        );

    return signup;
    };

module.exports = {
    signup
}
