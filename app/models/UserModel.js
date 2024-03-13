import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, "email is already exist"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"]
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    }
}, {
    timestamps: { createdAt: 'createdAt', updatedAt: 'customUpdatedAt' }
});

const User = mongoose.models.User || mongoose.model('User', Userschema);

export default User;
