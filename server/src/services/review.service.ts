import { Review } from "../model/review.model";
import { updateProductRating } from "./product.service";

export const getReviewsByProduct = async (productId: string) => {
  return await Review.find({ productId }).sort({ date: -1 }).exec();
};

export const createReview = async (
  productId: string,
  author: string,
  rating: number,
  comment: string
) => {
  try {
    const review = new Review({
      productId,
      author,
      rating,
      comment,
    });
    const savedReview = await review.save();
    await updateProductRating(productId);
    return savedReview;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateReview = async (
  reviewId: string,
  productId: string,
  updates: Partial<{ rating: number; comment: string }>
) => {
  const updatedReview = await Review.findByIdAndUpdate(reviewId, updates, {
    new: true,
  }).exec();
  if (!updatedReview) {
    await updateProductRating(productId);
  }
  return updateReview;
};

export const deleteProductReview = async (
  reviewId: string,
  productId: string
) => {
  const deleteReview = await Review.findByIdAndDelete(reviewId).exec();
  if (deleteReview) {
    await updateProductRating(productId);
  }
  return deleteReview;
};
