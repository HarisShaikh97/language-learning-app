import mongoose from "mongoose";
import { Schema } from "mongoose";
const classroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    assignments: [{
        type: Schema.Types.ObjectId,
        ref: "Assignment"
    }],


    createdAt: { type: Date, default: Date.now },
});

const Classroom = mongoose.models.Classroom || mongoose.model("Classroom", classroomSchema);
export default Classroom
