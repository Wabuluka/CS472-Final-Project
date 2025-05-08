import { Review } from "../model/review.model";

export const getReviewsByProduct = async (productId: string) => {
  return await Review.find({ productId }).sort({ date: -1 }).exec();
};
