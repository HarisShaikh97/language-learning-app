import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    
    },

    lastName: {
        type: String,
    
    },
    nickname: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: [true, "email already exists"]
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['student', 'teacher'],
        required: true
    },
    level: {
        type: Number,
        default: 0
    },

    recommendClass: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Classroom'
        }
    ],

    classrooms: [{
        type: Schema.Types.ObjectId, ref: 'Classroom'
    }],

    image: {
        type: String,

    },
},
    {
        timestamps: true
    }

)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User