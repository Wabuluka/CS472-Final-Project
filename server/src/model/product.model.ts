import mongoose, { Schema } from "mongoose";
import { IProduct } from "../types/product";

const productSchema: Schema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  dateAdded: { type: Date, default: Date.now },
  averageRating: { type: Number, default: 0, min: 0, max: 5 },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
