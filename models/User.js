const mongoose = require('mongoose');

//Schema and model to define a data structure for a user
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required: true
    },
    reviews:{
        type: Array,
    },
});

const User = model('User',UserSchema);

module.exports = User;