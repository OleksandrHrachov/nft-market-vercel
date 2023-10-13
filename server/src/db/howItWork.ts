import mongoose from "mongoose";

const HowItWorkCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
});

export const howItWorkCardModel = mongoose.model("HowItWorkCard", HowItWorkCardSchema);

export const getAllCards = () => howItWorkCardModel.find();
