const mongoose = require('mongoose');

//schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'user name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    address: {
        type: Array,
    },
    phone: {
        type: String,
        required: [true, 'phone number']
    },
    usertype: {
        type: String,
        required: [true, 'user type is required'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile: {
        type: String,
        default: 'https://res.cloudinary.com/dqj3x4g2m/image/upload/v1698924713/DefaultProfile.png'
    },
    answer:{
        type:String,
        required:[true,'Answer is required']
    }
},
 { timestamps: true });

//const userModel = mongoose.model('users', userSchema);

module.exports = mongoose.model('User', userSchema);
//module.exports = userModel;
