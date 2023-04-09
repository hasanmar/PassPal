const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

},
    {
        timestamps: true
    })

// verifyPassword
userSchema.methods.verifyPassword = function (password) {
    console.log(password);
    console.log(this.password);
    return bcrypt.compareSync(password, this.password);
}

// User Model
const User = mongoose.model("User", userSchema);

// Exports
module.exports = User;