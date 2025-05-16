import express from "express";
import {
  addReview,
  deleteReview,
  getProductReview,
} from "../controller/review.controller";

const reviewRouter = express.Router();

reviewRouter.get("/:id/reviews", getProductReview);
reviewRouter.post("/:id/reviews", addReview);
reviewRouter.delete("/reviews", deleteReview);
export default reviewRouter;
