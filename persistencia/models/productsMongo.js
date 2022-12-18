import mongoose from "mongoose";

const nameCollection = "products";

const productsSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
});

export const modelProducts = mongoose.model(nameCollection, productsSchema);
