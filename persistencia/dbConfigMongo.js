import mongoose from "mongoose";

function connectMongoDB(URL) {
  mongoose.connect(URL);
}   

export default connectMongoDB

