import mongoose from "mongoose";

const SocialLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String },
});

export const socialLinkModel = mongoose.model("SocialLink", SocialLinkSchema);

export const getAllSocialLinks = () => socialLinkModel.find();

