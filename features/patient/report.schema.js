import mongoose from "mongoose";

export const reportSchema = new mongoose.Schema({
    doctorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    date: {
        type: Date,
        default: Date.now
    },
    name: { type: String },
    num: { type: Number },
    doctor: { type: String },
    status: {
        type: String,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    }
})