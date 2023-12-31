import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {postbBooking, getBooking, deleteBooking } from "./controllers/booking.js"
import {getBus, postBus} from "./controllers/bus.js"

dotenv.config();


const app = express();
app.use(express.json());



const PORT = 5000;

//mongoDb connection 
const connectMongoDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    if (conn) {
        console.log("MongoDB connect succesfully")
    }
}

//--------------------------------------------------------------------------------------------------------
//post requiest
app.post("/api/v1/bookings", postbBooking);

//--------------------------------------------------------------------------------------------------------------------

app.get("/api/v1/bookings", getBooking)

//delete api

app.delete("/api/v1/bookings", deleteBooking);



////post buses
app.post("/api/v1/buses", postBus );

///app.get/buses
app.get("/api/v1/buses", getBus);



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    connectMongoDB();
})