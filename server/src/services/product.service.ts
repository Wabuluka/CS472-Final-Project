import { Product } from "../model/product.model";
import { IProduct } from "../types/product";

export const getProducts = async (page: number = 1, category?: string) => {
  const perPage = 10;
  const query = category ? { category } : {};

  const products = await Product.find(query)
    .sort({ dateAdded: -1 })
    .skip((page - 1) * perPage)
    .limit(perPage)
    .exec();

  const total = await Product.countDocuments(query);
  return {
    products,
    total,
    pages: Math.ceil(total / perPage),
    currentPage: page,
  };
};

export const addProduct = async (
  name: string,
  description: string,
  category: string,
  price: number
) => {
  const product = new Product({
    name,
    description,
    category,
    price,
  });
  return await product.save();
};

export const searchProducts = async (query: string) => {
  return await Product.find({
    name: { $regex: query, $options: "i" },
  }).exec();
};

export const getProductById = async (id: string) => {
  return await Product.findById(id).exec();
};

// export const updateProductRating = async (productId: string) => {
//   const reviews = await Review.find({ productId });
//   const averageRating = calculateAverageRating(reviews);
//   await Product.findByIdAndUpdate(
//     productId,
//     { averageRating },
//     { new: true }
//   ).exec();
//   return averageRating;
// };

export const updateProductRating = async (id: string, data: IProduct) => {
  const updated = await Product.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true, runValidators: true }
  );
  if (!updated) throw new Error();
};
