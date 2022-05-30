const User = require('../models/User');
const bcrypt = require('bcrypt');

class UserController {
  static register = async(req, res) => { 
    try {
      const { name, email, phone, password, confirmpassword } = req.body;

    //* Validations:
      if (!name || !email || !phone || !password || !confirmpassword) {
        return res.status(400).json({
          message: 'Please fill all fields',
        });
      }

      if (password !== confirmpassword) {
        return res.status(400).json({
          message: 'Passwords do not match',
        });
      }
    
      //* Check if user already exists:
      const userExists = await User.findOne({ email: email });
      if (userExists) {
        return res.status(400).json({
          message: 'User already exists',
        });
      }

      //* Create a password hash:
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt); // senha criptografada

      //* Create a user:
      const user = new User({
        name,
        email,
        phone,
        password: hash,
      });

      const newUser = await user.save();
      return res.status(201).json({
        message: 'User created successfully',
        newUser
      });

    } catch (err) {
      console.log('userExistsError:', err);
      return res.status(500).json({
        message: err.message
      });
    }

    // //* Create a password hash:
    // const hash = await bcrypt.hash(password, 10); // senha criptografada

    // //* Create a new user:
    // const user = new User({
    //   username,
    //   email,
    //   phone,
    //   password: hash,
    // });

    //* Save the new user:
  //   try {
  //   const newUser = await user.save();
  //     return res.status(201).json({
  //       message: 'User created successfully',
  //       newUser,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json({
  //       message: err.message
  //     });
  //   }
  // }
  }
} 
module.exports = UserController;

