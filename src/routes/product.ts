import express from "express";
import {
  index,
  remove,
  show,
  store,
  update,
} from "../controllers/productsController";

const router = express.Router();

router.get("/products", index);
router.get("/products/:id", show);
router.post("/products", store);
router.patch("/products/:id", update);
router.delete("/products/:id", remove);

export default router;
