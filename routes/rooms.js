import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

//create room
router.post("/:hotelid",verifyAdmin,createRoom);
//update room
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id",updateRoomAvailability);
//delete room
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);
//get rooms
router.get("/:id",verifyAdmin,getRoom);
//get all rooms
router.get("/",verifyAdmin,getRooms);
export default router;