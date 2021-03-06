import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from "./routes/auth.js";
import hotelsRoutes from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import reserveRoute from './routes/reserve.js';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to mongoDB");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected");
})

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//route
app.get('/', (req, res) => {
    res.send('wellcome to booking api');
  })
app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelsRoutes);
app.use('/api/rooms',roomsRoute);
app.use('/api/reserve',reserveRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went worng";
    return res.status(errorStatus).json({
        success: false,
        status:errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

//listen
app.listen(PORT,()=>{
    connect();
    console.log("Connected to Backent.");
});