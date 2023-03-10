const mongoose = require("mongoose");

const locationInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        enum: ["delhi", "mumbai", "banglore", "hyderabad"],
        required: true
    },
    area: {
        type: String,
    },
    pincode: {
        type: Number,
    },
    address: {
        type: String,
    },
    landmark: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    generalInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "generals",
    }
})

module.exports = mongoose.model("locations", locationInfoSchema)