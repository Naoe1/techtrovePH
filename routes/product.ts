import express from "express";
import productController from "../controllers/productController";

const router = express.Router();

router.get('/', productController.getCategories)

router.get('/:category', productController.getProducts);

router.get('/:category/:productId', productController.getProduct);

export default router;