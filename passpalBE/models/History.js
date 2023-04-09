const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
    website: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String
    },
    password: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true
    })


// User Model
const History = mongoose.model("History", HistorySchema);

// Exports
module.exports = History;