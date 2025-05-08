import { Request, Response } from "express";
import { getReviewsByProduct } from "../services/review.service";
export const getProductReview = async (req: Request, res: Response) => {
  try {
    const reviews = await getReviewsByProduct(req.params.id);
    res.json(reviews);
  } catch (e: any) {
    res.status(500).json({ message: "Error getting product reviews: ", e });
  }
};
