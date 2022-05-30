const mongoose = require('mongoose');

async function connectToDataBase () {
  await mongoose.connect('mongodb://localhost:27017/getapet')
  console.log('Connected to MongoDB!');
}

connectToDataBase().catch((err) =>  
  console.error('ConnectError: ', err));

module.exports = mongoose;


