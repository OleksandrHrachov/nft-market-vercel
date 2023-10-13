import mongoose from "mongoose";

const BottomBannerSchema = new mongoose.Schema({
  imgUrl: { type: String },
  assetName: {type: String},
  creatorId: { type: String, required: true },
});

export const artistModel = mongoose.model("BottomBanner", BottomBannerSchema);

export const getBottomBanner = () => artistModel.find();
