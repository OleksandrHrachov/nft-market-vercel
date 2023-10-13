import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  iconUrl: { type: String, required: true },
  category: { type: String, required: true },
});

export const artistModel = mongoose.model("Category", CategorySchema);

export const getAllCategories = () => artistModel.find();
