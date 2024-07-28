import express from "express";
import authRoutes from "./routes/auth";
// import dotenv from "dotenv";

const app = express();

// dotenv.config();

app.use(express.json());
app.use("/auth", authRoutes);


app.listen("8000", () => {
  console.log("Server is running... ");
});
