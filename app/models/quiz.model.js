import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    words: [{
        word: {
            type: String,
            required: true
        },
        meaning: {
            type: String,
            required: true
        }
    }],

    quizQuestion: {
        type: String,
        required: true
    },
    correctOption: {
        type: String,
        required: true,
    },
    falseOptions: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
})

const Quiz = mongoose.models.quiz || mongoose.model("quiz", quizSchema)


export default Quiz; //exporting the model