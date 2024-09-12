import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB Connected !! Connection Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection failed! :  ${error}`);
  }
};

export default connectDB;
