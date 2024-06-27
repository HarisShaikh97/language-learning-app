import mongoose from "mongoose";
const { Schema } = mongoose;

const assignmentSchema = new Schema({
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
        type: Date, // It's better to use Date type for dueDate
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

const Assignment = mongoose.models.Assignment || mongoose.model("Assignment", assignmentSchema);
export default Assignment;
