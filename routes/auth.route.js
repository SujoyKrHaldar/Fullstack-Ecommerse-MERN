import express from "express";
import authController from "../controllers/auth.controller.js";
import checkPermission from "../middleware/auth.middleware.js";

const router = express.Router();

// Auth api routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected route for user
router.get("/dashboard", checkPermission.isLoggedIn, authController.check);

// Protected route for admin
router.get(
  "/admin",
  checkPermission.isLoggedIn,
  checkPermission.isAdmin,
  authController.check
);

export default router;
