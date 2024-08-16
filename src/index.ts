import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "../config/database";
import authRoutes from "./routes/auth";
import productsRoutes from "./routes/product";
import cartRoutes from "./routes/cart";


const app = express();
dotenv.config();

//  MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);
app.use("/api", productsRoutes);
app.use("/api", cartRoutes);

app.listen("8000", () => {
  console.log("Server is running... ");
});
