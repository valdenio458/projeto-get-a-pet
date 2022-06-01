const jwt = require('jsonwebtoken');

const createUserToken = async(user, _req, res) => {
  // Create a token:
  const token = jwt.sign({ 
    id: user._id,
    name: user.name,
  }, "oursecret");

  // return token:
  res.status(200).json({
    message: "Are you authenticated!",
    token: token,
    userId: user._id,
  })
}; 

module.exports = createUserToken