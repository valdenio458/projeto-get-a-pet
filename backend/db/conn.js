const mongoose = require('mongoose');

const connectToDataBase = async () => {
  await mongoose.connect('mongodb://localhost:27017/getapet')
  console.log('Connected to MongoDB!');
}

connectToDataBase().catch((err) =>  
  console.error(err));

module.exports = mongoose;


