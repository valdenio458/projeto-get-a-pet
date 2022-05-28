import mongoose from "../db/conn";
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
    { timestamps: true }, // cria createdAt, updatedAt
  ),
);   

export default User;