import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  assetName: { type: String, required: true },
  imgUrl: { type: String },
  createdBy: { type: String, required: true },
  creatorNickName: { type: String },
  creatorAvatarUrl: { type: String },
});

export const bannerModel = mongoose.model("Banner", BannerSchema);

export const getBannerAsset = () => bannerModel.find();
