import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://test:test@cluster0.1fwtn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0");
  } catch (error) {
  }
};


export default connect;
