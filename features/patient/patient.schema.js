import mongoose from "mongoose";

export const patientSchema = new mongoose.Schema({
    name: { type: String },
    num: { type: Number },
})