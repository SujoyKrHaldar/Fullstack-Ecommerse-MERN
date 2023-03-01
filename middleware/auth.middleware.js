import jwt from "jsonwebtoken";

// Token based protected routes - user and admin
const checkPermission = {
  isLoggedIn: async (req, res, next) => {
    try {
      const data = jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      console.log(` Access granted `.bgYellow);
      req.user = data;
      next();
    } catch (e) {
      console.log(` Unauthorized access `.bgRed);
      res.status(401).json({
        success: false,
        message: "Unauthorized access",
        error: e.message,
      });
    }
  },

  isAdmin: async (req, res, next) => {
    try {
      const { isAdmin } = req.user;
      if (!isAdmin) {
        console.log(` Unauthorized access in Admin pannel `.bgRed);
        return res.status(401).json({
          success: false,
          message: "Unauthorized access in Admin pannel",
        });
      }
      console.log(` Access granted as Admin `.bgYellow);
      next();
    } catch (e) {
      console.log(` Unauthorized access `.bgRed);
      res.status(401).json({
        success: false,
        message: "Unauthorized access",
        error: e.message,
      });
    }
  },
};

export default checkPermission;
