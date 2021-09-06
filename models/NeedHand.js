const mongoose = require('mongoose');

const NeedHandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const NeedHandModel = mongoose.model("NeedHand", NeedHandSchema);
module.exports = NeedHandModel;