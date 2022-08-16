const userService = require('../services/userService');

const signUp = async (req, res) => {
    try { 
        const {name, email, nickname, password} = req.body;

        if ( !name || !email || !nickname || !password ) {
            return res.status(400).json({ message: 'KEY_ERROR' });
        }
        await userService.signUp(name, email, nickname, password);
    
        res.status(201).end();
     } catch (err) {
    res
      .status(err.statusCode ? err.statusCode : 400)
      .json({ message: err.message });
  }
};

const signIn = async (req, res) => {
    try {
      const { email, password } = req.body;

      const accessToken = await userService.signIn(email, password);
      
      res.status(200).json({ accessToken: accessToken });
    } catch (err) {
    res
      .status(err.statusCode ? err.statusCode : 401)
      .json({ message: err.message });
  }
};

  module.exports = {
    signUp,
    signIn
};
