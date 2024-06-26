import mongoose from "mongoose";
import { Schema } from "mongoose";

const assignmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    classroom: {
        type: Schema.Types.ObjectId,
        ref: "Classroom",
        required: true,
    },
    file: {
        type: String,

    },
    dueDate: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

const Assignment = mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema);
export default Assignment;
