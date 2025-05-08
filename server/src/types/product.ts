import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  dateAdded: Date;
  averageRating: number;
}

export interface IProductCreateDTO {
  name: string;
  description: string;
  category: string;
  price: number;
}

export interface IProductUpdateDTO extends Partial<IProductCreateDTO> {}

export interface PageResponse<T> {
  data: [];
  pagination: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
  };
}
