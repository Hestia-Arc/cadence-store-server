import express, {Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { pool } from "../config/database";
import authRoutes from "./routes/auth";
import productsRoutes from "./routes/product";
import cartRoutes from "./routes/cart";


const app: Express = express();
const port = 8000;
dotenv.config();

//  MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/auth", authRoutes);
app.use("/api", productsRoutes);
app.use("/api", cartRoutes);

app.get("/", (request: Request, response: Response) => {
  response.send("Hi. Server is up... ");
});

app.listen(port, () => {
  console.log("Server is running... ");
});
