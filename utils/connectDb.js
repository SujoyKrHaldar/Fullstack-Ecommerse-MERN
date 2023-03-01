import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(` Database connected successfully `.bgGreen);
  } catch (e) {
    console.log(` Database connection failed.\n Reason: ${e.message} `.bgRed);
  }
};

export default connectDb;
