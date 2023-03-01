import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(password, salt);
    console.log(" Password hashing done ".bgYellow);
    return hashedPass;
  } catch (e) {
    console.log(` Hashing failed due to ${e.message} `.bgRed);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  try {
    const hashedPass = await bcrypt.compare(password, hashedPassword);
    console.log(" Password comparing done ".bgYellow);
    return hashedPass;
  } catch (e) {
    console.log(` Compareing failed due to ${e.message} `.bgRed);
  }
};
