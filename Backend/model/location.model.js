import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  userId: { type:mongoose.Types.ObjectId , ref:"user"},
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Location = mongoose.model('location', locationSchema);
export default Location
