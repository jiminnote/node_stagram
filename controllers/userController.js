const userService = require('../services/userService');

const signup = async (req, res) => {
    try { 
        const {name, email, nickname, password} = req.body;

        if ( !name || !email || !nickname || !password ) {
            return res.status(400).json({ message: 'KEY_ERROR' });
        }
        await userService.signup(name, email, nickname, password);
    
        return res.status(201).json({message: 'SUCCESS',});
    } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = {
    signup
};