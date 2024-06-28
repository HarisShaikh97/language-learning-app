import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
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

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
export default Task;
