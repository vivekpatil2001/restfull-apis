import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    busName: {
        type: String,
        required: true
    },
    busNumber: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Booking = model("Booking", bookingSchema)

export default Booking