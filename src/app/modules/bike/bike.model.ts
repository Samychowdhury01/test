import { Schema, model } from "mongoose";
import { IBikeModel, TBike } from "./bike.interface";
// 2. Create a Schema corresponding to the document interface.
const bikeSchema = new Schema<TBike, IBikeModel>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  cc: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true
  }
});
// static method to find out bike exist or not
bikeSchema.statics.isBikeExists = async function (id:string) {
    const existingBike = await Bike.findOne({ id });
    return existingBike;} 
// 3. Create a Model.
export const Bike = model<TBike, IBikeModel>("Bike", bikeSchema);
