import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Can not be empty!"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Can not be empty!"],
    },
    password: { type: String, required: [true, "Can not be empty!"] },
    isAdmin: { type: Boolean, default: false },
    address: { type: String, required: [true, "Can not be empty!"] },
    phone: { type: Number, required: [true, "Can not be empty!"] },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
