import mongoose from "mongoose";

const connectDb = async () => {
  return mongoose.connect(process.env.MONGODB_URI as string);
};

export default connectDb;
