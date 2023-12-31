import Booking from "../models/Booking.js"

const postbBooking = async (req, res) => {

    const { name, mobile, busName, busNumber, to, from, date } = req.body;

    try {
        const booking = new Booking({
            name,
            mobile,
            busName,
            busNumber,
            to,
            from,
            date
        })

        const savebooking = await booking.save();

        res.json({
            success: true,
            data: savebooking,
            message: "message save succesfully"
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}

const getBooking = async (req, res) => {

    try {
        const findBooking = await Booking.find();

        res.json({
            success: true,
            data: savebooking,
            message: "message saved succesfully"
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}

const deleteBooking = async (req, res) => {
    try {
        const { _id } = req.params;
        await Booking.deleteOne({ _id: _id })

        res.json({
            success: true,
            message: "booking delete succesfully"
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })

    }
}


export { postbBooking, getBooking, deleteBooking }