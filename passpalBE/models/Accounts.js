// Require Mongoose
const mongoose = require('mongoose');

// Schema
const mongoose = require('mongoose');

const AccountsSchema = mongoose.Schema({
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
const Accounts = mongoose.model("Accounts", AccountsSchema);

// Exports
module.exports = Accounts;


