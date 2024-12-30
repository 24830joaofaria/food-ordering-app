import {model, models, Schema} from "mongoose";

const { Schema } = require("mongoose");

const UserSchema = new Schema({
    email : {type: String, required: true, unique: true},
    password : {
        type: String, 
        required: true, 
        validate: pass => {
            if(!pass?.length || pass.length < 5){
                new Error('password must be alteast 5 characters');
                return false;
            }
        },
    }    
}, {timestamps: true});


export const User = model('User', UserSchema);



/*
import {model, models, Schema} from "mongoose";

// const { Schema } = require("mongoose");

const UserSchema = new Schema({
    email : {type: String, required: true, unique: true},
    password : {
        type: String, 
        required: true, 
        validate: {
            validator: function (pass) {
                return pass.length >= 5;
            },
            message: "Password must be atleast 5 characters long.",
        },
    }    
}, {timestamps: true});


export const User = models?.User || model('User', UserSchema);
*/