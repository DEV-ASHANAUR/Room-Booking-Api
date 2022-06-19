import Reserve from "../models/Reserve.js";


export const Booking = async(req,res,next)=>{
    console.log("reserve data",req.body);
    const booking = new Reserve(req.body);
    try {
        const saved = await booking.save();
        res.status(200).json(saved);
    } catch (error) {
        next(error);
    }
}

export const GetBookingByUser = async(req,res,next)=>{
    try {
        const data = await Reserve.find({userId:req.params.id});
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}