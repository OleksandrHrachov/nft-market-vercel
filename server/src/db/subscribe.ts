import mongoose from "mongoose";

const SubscribeSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  title: {type: String, required: true},
  description: { type: String, required: true },
});

export const subscribeModel = mongoose.model("Subscribe", SubscribeSchema);

export const getSubscribe = () => subscribeModel.find();