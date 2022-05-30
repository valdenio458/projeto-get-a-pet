const User = require('../models/User');

class UserController {
  static register = async(_req, res) => { 
    try {
      return res.json('Olá, Get a Pet!')
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: err.message
      });
    }
  }
}
  
module.exports = UserController;

