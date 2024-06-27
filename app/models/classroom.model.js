import mongoose from "mongoose";
const { Schema } = mongoose;

const classroomSchema = new Schema({
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
    work: [{
        type: Schema.Types.ObjectId,
        ref: "Assignment"
    }],
    createdAt: { type: Date, default: Date.now },
});

const Classroom = mongoose.models.Classroom || mongoose.model("Classroom", classroomSchema);
export default Classroom;
