import express from "express";
import { index } from "../controllers/cartController";

const router = express.Router();

router.get("/cart", index);
// router.get("/products/:id", show);
// router.post("/products", store);
// router.patch("/products/:id", update);
// router.delete("/products/:id", remove);

export default router;
