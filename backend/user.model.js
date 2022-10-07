const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    branch: {
        type: String,
        enum: ['National University Manila', 'NU Baliwag', 'NU Clark', 'NU Dasmarinas', 'NU Fairview', 'NU Laguna', 'NU Lipa', 'NU MOA', 'NU Nazareth School'],
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;