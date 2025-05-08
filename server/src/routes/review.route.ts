import express from "express";
import { getAllProducts } from "../controller/product.controller";

const reviewRouter = express.Router();

reviewRouter.get(":id/reviews", getAllProducts);

export default reviewRouter;
