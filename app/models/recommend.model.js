import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define the Recommendation Schema
const recommendationSchema = new Schema({

    students: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true,
    }],
    createdAt: { type: Date, default: Date.now },
});

// Create the Recommendation Model
const Recommendation = mongoose.models.Recommendation || mongoose.model('Recommendation', recommendationSchema);
export default Recommendation;
