import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema({
  assetName: { type: String, required: true },
  imgUrl: { type: String },
  createdAt: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  highestBid: { type: Number, default: 0 },
  tags: { type: Array, default: [] },
  creatorId: { type: String, required: true },
});

export const assetModel = mongoose.model("Asset", AssetSchema);

export const getAllAssets = () => assetModel.find();
export const getCreatedBy = (createdByAttistId: string) =>
  assetModel.find({createdBy: createdByAttistId});
export const getAssetById = (id: string) => assetModel.findById(id);

export const getAssetsByTag = (tags: string[]) => {
  return  assetModel.find({tags: {$in: [...tags]}});
}
