import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  nickName: { type: String, required: true },
  avatarUrl: { type: String },
  volume: { type: Number },
  soldNft: { type: Number, required: true },
  followers: { type: Number, required: true },
  bio: { type: String },
  socialLinks: {
    youtube: { type: String },
    twitter: { type: String },
    instagram: { type: String },
  },
  assets: { type: Array, default: [] },
  totalSales: {type: Number, required: true}
});

export const artistModel = mongoose.model("Artist", ArtistSchema);

export const getAllArtists = () => artistModel.find();
export const getArtistById = (id: string) => artistModel.findById(id);
