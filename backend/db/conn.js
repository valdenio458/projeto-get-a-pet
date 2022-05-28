import mongoose from 'mongoose';

async function main() {
  await mongoose.connect('mongodb://localhost:27017/getapet')
  console.log('Connected to MongoDB!');
}

main().catch((err) =>  
  console.error(err));

export default mongoose;


