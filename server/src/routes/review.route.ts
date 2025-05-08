import express from "express";
import { addReview, getProductReview } from "../controller/review.controller";

const reviewRouter = express.Router();

reviewRouter.get("/:id/reviews", getProductReview);
reviewRouter.post("/:id/reviews", addReview);
export default reviewRouter;
