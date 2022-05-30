const mongoose = require('../db/conn');
const { Schema } = mongoose;

const User = mongoose.model(
  'User',
  new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,    
    },
    image: {
      type: String
    },
    phone: {
      type: String,
      required: true,
    },
  },
    { 
      timestamps: true, // cria createdAt, updatedAt
      versionKey: false  // não salva a versão do documento
    } 
  ),
);   

module.exports = User;