const mongoose = require ("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        trim: true
    },
    email :{
        type : String,
        required : true,
        trim: true,
        unique : true
    },
    password :{
        type : String,
        required : [true , "please add a password"],
        trim: true,
        minlength : [6 ]
    }
} , {timestamps:true })






module.exports = mongoose.model("userSchema" , userSchema)