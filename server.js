// Npm packages
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import express from "express";

// File import
import connectDb from "./utils/connectDb.js";
import authRouter from "./routes/auth.route.js";

// configuration
dotenv.config();
const app = express();
const port = process.env.PORT;

// Middlewars
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);

// Database and Server
connectDb();
app.listen(port, () =>
  console.log(` Server running at http://localhost:${port} `.bgCyan)
);
