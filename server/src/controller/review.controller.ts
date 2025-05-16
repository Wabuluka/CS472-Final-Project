import { Request, Response } from "express";
import {
  createReview,
  deleteProductReview,
  getReviewsByProduct,
} from "../services/review.service";

export const getProductReview = async (req: Request, res: Response) => {
  try {
    const reviews = await getReviewsByProduct(req.params.id);
    res.json(reviews);
  } catch (e: any) {
    res.status(500).json({ message: "Error getting product reviews: ", e });
  }
};

export const addReview = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const { author, rating, comment } = req.body;
    if (!author || !rating || !comment) {
      res.status(400).json({ message: "All fields are required" });
    }
    const review = await createReview(productId, author, rating, comment);
    res.status(201).json(review);
  } catch (e) {
    res.status(500).json({ message: "Error adding a review:", e });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { reviewId, productId } = req.body;
    // console.log(reviewId, productId);
    await deleteProductReview(reviewId, productId);
    res.status(200).json({ message: "deleted" });
  } catch (e: any) {
    res.status(500).json({ message: "Error getting product reviews: ", e });
  }
};
