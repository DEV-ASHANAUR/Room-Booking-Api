import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

//create
router.post("/",verifyAdmin, createHotel);
//update
router.put("/:id",verifyAdmin, updateHotel);
//delete
router.delete("/:id",verifyAdmin, deleteHotel);
//get hotel by id
router.get("/find/:id", getHotel);
//get All hotels we can also add min and max
router.get('/', getHotels);
//count by cities
router.get("/countByCity", countByCity);
//countByType
router.get("/countByType",countByType);
//get hotel rooms
router.get("/room/:id",getHotelRooms);
//export 
export default router;