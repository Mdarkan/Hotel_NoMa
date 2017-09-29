const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    numAdults: Number,
    enterDate: String,
    exitDate: String,
    cancelByDate: String,
    numNights: Number,
    roomType: String,
    totalCostOfStay: Number,
    bookTime: String,
    confirmationNumber: String,
    contactInfo: {
        email: String,
        customerName: String,
        customerAddress: String,
        customerCity: String,
        customerZip: Number,
        customerCountry: String
    }
});

mongoose.model('itinerary', itinerarySchema);