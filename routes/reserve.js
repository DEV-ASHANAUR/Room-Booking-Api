import express from 'express'
import { Booking, GetBookingByUser } from '../controllers/reserver.js';

const router = express.Router();

router.post("/",Booking);
//get by user id
router.get("/user/:id",GetBookingByUser);

export default router