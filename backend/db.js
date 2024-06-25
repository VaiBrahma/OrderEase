import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Hey Vaibhav! MongoDB connected');
  } catch (error) {
    console.error('Hey Vaibhav! MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
