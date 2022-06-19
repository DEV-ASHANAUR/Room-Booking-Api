import mongoose from "mongoose";
const ReserveSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    bookedRoom: {
      type: Array
    },
    hotelId: {
      type: String,
      required: true,
    },
    hotelName: {
      type: String
    },
  });
  
  export default mongoose.model("Reserve", ReserveSchema)