const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    userid: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.models = {} //nextjs
module.exports = mongoose.model('Users', UsersSchema);