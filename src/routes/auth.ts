import express from "express";
import { register } from "../controllers/authController";

const router = express.Router();

router.post("/auth/register", register);
// router.post("/auth/login", authController.login);
// router.get("/user", authController.history);

export default router;
